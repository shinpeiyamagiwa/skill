<template>
  <v-container>
    <v-layout>
      <v-flex xs6>
        <h1>一覧画面</h1>
      </v-flex>
      <v-flex xs4>
        <router-link to="/factory/create">
          <div class="text-center">
            <v-btn small color="primary">工場追加</v-btn>
          </div>
        </router-link>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex sm6 v-for="factory in factories" v-bind:key="factory.id">
        <v-card max-width="344" class="mx-auto my-2">
          <v-layout>
            <v-flex xs8>
              <v-card-title class="title">{{factory.name}}工場</v-card-title>
            </v-flex>
            <v-flex xs4>
              <v-btn small @click="deleteFactory(factory.id, $event)" class="mt-4">
                <i class="fas fa-trash"></i>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-list-item>
            <v-list-item-content>
              <v-layout>
                <v-flex xs-8>
                  <router-link
                    v-bind:to="{name: 'Calculate', params: {id: facility.id}}"
                    v-for="facility in factory.facilities"
                    v-bind:key="facility.id"
                  >
                    <v-list-item-title>{{facility.name}}</v-list-item-title>
                  </router-link>
                </v-flex>
              </v-layout>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-layout>
              <!-- <v-flex xs4>
                <router-link to="/facility/edit">
                  <div class="text-center">
                    <v-btn small color="primary">設備設定編集</v-btn>
                  </div>
                </router-link>
              </v-flex>-->
              <v-flex xs4>
                <router-link
                  v-bind:to="{name: 'FacilityCreate', params: {id: factory.id}}"
                  v-bind:key="factory.id"
                >
                  <div class="text-center">
                    <v-btn class="mx-2" fab dark small color="primary">
                      <v-icon dark>add</v-icon>
                    </v-btn>
                  </div>
                </router-link>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  data: () => ({
    factories: []
  }),
  beforeCreate() {
    firebase
      .firestore()
      .collection("factories")
      .get()
      .then(documents => {
        // 工場の繰り返し
        documents.forEach(doc => {
          // 設備を取得
          const facilities = [];
          firebase
            .firestore()
            .collection("facilities")
            .where("factory_id", "==", doc.id)
            .get()
            .then(facility_documents => {
              // 設備の繰り返し
              facility_documents.forEach(facility_doc => {
                facilities.push({
                  id: facility_doc.id,
                  name: facility_doc.data().name
                });
              });
            });

          this.factories.push({
            id: doc.id,
            name: doc.data().name,
            facilities: facilities
          });

          console.log(this.factories);
        });
      });
  },
  methods: {
    deleteFactory(id, event) {
      firebase
        .firestore()
        .collection("factories")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          this.$router.push("/");
          console.log("aaaaaaaaa: ", this.factories);
          this.factories.some((v, i) => {
            if (v.id == id) this.factories.splice(i, 1); //id:3の要素を削除
          });
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    }
  }
};
</script>
