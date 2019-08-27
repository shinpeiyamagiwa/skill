<template>
  <v-form>
    <v-container grid-list-xl>
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
      <h5>ダウンタイム</h5>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="downtimeItem1" label="項目" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-select :items="time" v-model="downtimeTime1" label="時間(分)" required height="10px"></v-select>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="downtimeItem2" label="項目" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-select :items="time" v-model="downtimeTime2" label="時間(分)" required height="10px"></v-select>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="downtimeItem3" label="項目" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-select :items="time" v-model="downtimeTime3" label="時間(分)" required height="10px"></v-select>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="downtimeItem4" label="項目" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-select :items="time" v-model="downtimeTime4" label="時間(分)" required height="10px"></v-select>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="downtimeItem5" label="項目" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-select :items="time" v-model="downtimeTime5" label="時間(分)" required height="10px"></v-select>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="downtimeItem6" label="項目" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-select :items="time" v-model="downtimeTime5" label="時間(分)" required height="10px"></v-select>
        </v-flex>
      </v-layout>
      <h5>理論サイクルタイム</h5>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="cycletimeItem1" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="cycletimeTime1" label="基準cタイム" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="cycletimeItem2" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="cycletimeTime2" label="基準cタイム" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="cycletimeItem3" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="cycletimeTime3" label="基準cタイム" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="cycletimeItem4" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="cycletimeTime4" label="基準cタイム" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="cycletimeItem5" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="cycletimeTime5" label="基準cタイム" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="cycletimeItem6" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="cycletimeTime6" label="基準cタイム" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <div class="text-center">
        <router-link to="/">
          <v-btn small color="primary" @click="create">設定完了</v-btn>
        </router-link>
      </div>
    </v-container>
  </v-form>
</template>



<script>
import firebase from "firebase";

export default {
  data() {
    const time = [];
    for (let i = 1; i <= 60; i++) {
      time.push(i);
    }
    return {
      name: "",
      downtimeItem1: "",
      downtimeItem2: "",
      downtimeItem3: "",
      downtimeItem4: "",
      downtimeItem5: "",
      downtimeItem6: "",
      downtimeTime1: "",
      downtimeTime2: "",
      downtimeTime3: "",
      downtimeTime4: "",
      downtimeTime5: "",
      downtimeTime6: "",
      cycletimeItem1: "",
      cycletimeItem2: "",
      cycletimeItem3: "",
      cycletimeItem4: "",
      cycletimeItem5: "",
      cycletimeItem6: "",
      cycletimeTime1: "",
      cycletimeTime2: "",
      cycletimeTime3: "",
      cycletimeTime4: "",
      cycletimeTime5: "",
      cycletimeTime6: "",
      time: time
    };
  },
  methods: {
    create() {
      firebase
        .firestore()
        .collection("facilities")
        .add({
          factory_id: this.$route.params.id,
          name: this.name,
          downtimeItem1: this.downtimeItem1,
          downtimeItem2: this.downtimeItem2,
          downtimeItem3: this.downtimeItem3,
          downtimeItem4: this.downtimeItem4,
          downtimeItem5: this.downtimeItem5,
          downtimeItem6: this.downtimeItem6,
          downtimeTime1: this.downtimeTime1,
          downtimeTime2: this.downtimeTime2,
          downtimeTime3: this.downtimeTime3,
          downtimeTime4: this.downtimeTime4,
          downtimeTime5: this.downtimeTime5,
          downtimeTime6: this.downtimeTime6,
          cycletimeItem1: this.cycletimeItem1,
          cycletimeItem2: this.cycletimeItem2,
          cycletimeItem3: this.cycletimeItem3,
          cycletimeItem4: this.cycletimeItem4,
          cycletimeItem5: this.cycletimeItem5,
          cycletimeTime1: this.cycletimeTime1,
          cycletimeTime2: this.cycletimeTime2,
          cycletimeTime3: this.cycletimeTime3,
          cycletimeTime4: this.cycletimeTime4,
          cycletimeTime5: this.cycletimeTime5,
          cycletimeTime6: this.cycletimeTime6
        })
        .then(facility => {
          console.log("Document written with ID: ", facility.id);
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });
    }
  }
};
</script>
