<template>
  <v-form>
    <v-container fluid grid-list-xl>
      <v-layout wrap>
        <v-flex xs6>
          <h1>設備追加</h1>
        </v-flex>
        <v-flex xs4>
          <router-link to="/">一覧画面へ</router-link>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="name" label="設備名" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <div class="text-center">
        <router-link to="/">
          <v-btn small color="primary" @click="create">工場追加</v-btn>
        </router-link>
      </div>
    </v-container>
  </v-form>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    create() {
      firebase
        .firestore()
        .collection("factories")
        .add({ name: this.name })
        .then(doc => {
          console.log("Document written with ID: ", doc.id);
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });
    }
  }
};
</script>