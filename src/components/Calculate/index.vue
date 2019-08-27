<template>
  <v-form>
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs5>
          <h1>計算画面</h1>
        </v-flex>
        <v-flex xs4 class="py-0">
          <router-link to="/">一覧画面へ</router-link>
        </v-flex>
        <v-flex xs3 class="py-0">
          <router-link to="/">
            <v-btn small color="primary" @click="deleteFacility">削除</v-btn>
          </router-link>
        </v-flex>
      </v-layout>
      <h5>計画停止</h5>
      <v-layout wrap>
        <v-flex xs4 class="py-0">
          <v-text-field v-model="meeting" label="集礼" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs4 class="py-0">
          <v-text-field v-model="clean" label="清掃" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs4 class="py-0">
          <v-text-field v-model="other" label="その他" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <h5>ダウンタイム</h5>
      <v-layout wrap>
        <v-flex xs3 class="py-0">
          <v-text-field label="項目" v-model="this.facility.downtimeItem1" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field
            label="時間"
            v-model.number="this.facility.downtimeTime1"
            required
            height="10px"
          ></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="time1" label="回数" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="downtime1" label required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs3 class="py-0">
          <v-text-field label="項目" v-model="this.facility.downtimeItem2" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field
            label="時間"
            v-model.number="this.facility.downtimeTime2"
            required
            height="10px"
          ></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="time2" label="回数" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="downtime2" label required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs3 class="py-0">
          <v-text-field label="項目" v-model="this.facility.downtimeItem3" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field
            label="時間"
            v-model.number="this.facility.downtimeTime3"
            required
            height="10px"
          ></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="time3" label="回数" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="downtime3" label required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs3 class="py-0">
          <v-text-field label="項目" v-model="this.facility.downtimeItem4" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field
            label="時間"
            v-model.number="this.facility.downtimeTime4"
            required
            height="10px"
          ></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="time4" label="回数" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="downtime4" label required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs3 class="py-0">
          <v-text-field label="項目" v-model="this.facility.downtimeItem5" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field
            label="時間"
            v-model.number="this.facility.downtimeTime5"
            required
            height="10px"
          ></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="time5" label="回数" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="downtime5" label required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs3 class="py-0">
          <v-text-field label="項目" v-model="this.facility.downtimeItem6" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field
            label="時間"
            v-model.number="this.facility.downtimeTime6"
            required
            height="10px"
          ></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="time6" label="回数" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="downtime6" label required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <h5>理論サイクルタイム</h5>
      <v-layout wrap>
        <v-flex xs3 class="py-0">
          <v-text-field v-model="this.facility.cycletimeItem1" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field
            v-model.number="this.facility.cycletimeTime1"
            label="基準cタイム(s)"
            required
            height="10px"
          ></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="number1" label="生産数" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="cycletime1" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs3 class="py-0">
          <v-text-field v-model="this.facility.cycletimeItem2" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field
            v-model.number="this.facility.cycletimeTime2"
            label="基準cタイム(s)"
            required
            height="10px"
          ></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="number2" label="生産数" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="cycletime2" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs3 class="py-0">
          <v-text-field v-model="this.facility.cycletimeItem3" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field
            v-model.number="this.facility.cycletimeTime3"
            label="基準cタイム(s)"
            required
            height="10px"
          ></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="number3" label="生産数" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="cycletime3" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs3 class="py-0">
          <v-text-field v-model="this.facility.cycletimeItem4" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field
            v-model.number="this.facility.cycletimeTime4"
            label="基準cタイム(s)"
            required
            height="10px"
          ></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="number4" label="生産数" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="cycletime4" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs3 class="py-0">
          <v-text-field v-model="this.facility.cycletimeItem5" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field
            v-model.number="this.facility.cycletimeTime5"
            label="基準cタイム(s)"
            required
            height="10px"
          ></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="number5" label="生産数" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="cycletime5" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs3 class="py-0">
          <v-text-field v-model="this.facility.cycletimeItem6" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field
            v-model.number="this.facility.cycletimeTime6"
            label="基準cタイム(s)"
            required
            height="10px"
          ></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="number6" label="生産数" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="cycletime6" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <h5>不良枚数</h5>
      <v-layout wrap>
        <v-flex xs3 class="py-0">
          <v-text-field v-model.number="defective" label="不良数" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-card max-width="344" class="mx-auto">
        <v-card-title>
          <v-layout wrap>
            <v-flex xs6 class="py-0">
              <h3>設備生産性</h3>
            </v-flex>
            <v-flex xs3 class="py-0">
              <v-text-field v-model.number="OEE" required height="10px"></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-list-item>
          <v-list-item-content>
            <v-text-field v-model.number="availability" label="時間稼働率" required height="10px"></v-text-field>
            <v-text-field v-model.number="performance" label="速度稼働率" required height="10px"></v-text-field>
            <v-text-field v-model.number="quality" label="直行率" required height="10px"></v-text-field>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-container>
  </v-form>
</template>

  <script>
import firebase from "firebase";

export default {
  data: () => ({
    facility: {},
    time1: "",
    time2: "",
    time3: "",
    time4: "",
    time5: "",
    time6: "",
    number1: "",
    number2: "",
    number3: "",
    number4: "",
    number5: "",
    number6: "",
    defective: "",
    meeting: "",
    clean: "",
    other: ""
  }),
  beforeCreate() {
    firebase
      .firestore()
      .collection("facilities")
      .doc(this.$route.params.id)
      .get()
      .then(doc => {
        const obj = {
          id: doc.id,
          name: doc.data().name,
          downtimeItem1: doc.data().downtimeItem1,
          downtimeItem2: doc.data().downtimeItem2,
          downtimeItem3: doc.data().downtimeItem3,
          downtimeItem4: doc.data().downtimeItem4,
          downtimeItem5: doc.data().downtimeItem5,
          downtimeItem6: doc.data().downtimeItem6,
          downtimeTime1: doc.data().downtimeTime1,
          downtimeTime2: doc.data().downtimeTime2,
          downtimeTime3: doc.data().downtimeTime3,
          downtimeTime4: doc.data().downtimeTime4,
          downtimeTime5: doc.data().downtimeTime5,
          downtimeTime6: doc.data().downtimeTime6,
          cycletimeItem1: doc.data().cycletimeItem1,
          cycletimeItem2: doc.data().cycletimeItem2,
          cycletimeItem3: doc.data().cycletimeItem3,
          cycletimeItem4: doc.data().cycletimeItem4,
          cycletimeItem5: doc.data().cycletimeItem5,
          cycletimeItem6: doc.data().cycletimeItem6,
          cycletimeTime1: doc.data().cycletimeTime1,
          cycletimeTime2: doc.data().cycletimeTime2,
          cycletimeTime3: doc.data().cycletimeTime3,
          cycletimeTime4: doc.data().cycletimeTime4,
          cycletimeTime5: doc.data().cycletimeTime5,
          cycletimeTime6: doc.data().cycletimeTime6
        };

        this.facility = obj;
      });
  },
  computed: {
    downtime1: {
      get: function() {
        return this.facility.downtimeTime1 * this.time1;
      }
    },
    downtime2: {
      get: function() {
        return this.facility.downtimeTime2 * this.time2;
      }
    },
    downtime3: {
      get: function() {
        return this.facility.downtimeTime3 * this.time3;
      }
    },
    downtime4: {
      get: function() {
        return this.facility.downtimeTime4 * this.time4;
      }
    },
    downtime5: {
      get: function() {
        return this.facility.downtimeTime5 * this.time5;
      }
    },
    downtime6: {
      get: function() {
        return this.facility.downtimeTime6 * this.time6;
      }
    },
    cycletime1: {
      get: function() {
        return this.facility.cycletimeTime1 * this.number1;
      }
    },
    cycletime2: {
      get: function() {
        return this.facility.cycletimeTime2 * this.number2;
      }
    },
    cycletime3: {
      get: function() {
        return this.facility.cycletimeTime3 * this.number3;
      }
    },
    cycletime4: {
      get: function() {
        return this.facility.cycletimeTime4 * this.number4;
      }
    },
    cycletime5: {
      get: function() {
        return this.facility.cycletimeTime5 * this.number5;
      }
    },
    cycletime6: {
      get: function() {
        return this.facility.cycletimeTime6 * this.number6;
      }
    },
    availability: {
      get: function() {
        return (
          ((470 -
            (this.downtime1 +
              this.downtime2 +
              this.downtime3 +
              this.downtime4 +
              this.downtime5 +
              this.downtime6)) *
            100) /
          470
        ).toFixed(2);
      }
    },
    performance: {
      get: function() {
        return (
          ((this.cycletime1 / 60 +
            this.cycletime2 / 60 +
            this.cycletime3 / 60 +
            this.cycletime4 / 60 +
            this.cycletime5 / 60 +
            this.cycletime6 / 60) *
            100) /
          470
        ).toFixed(2);
      }
    },
    quality: {
      get: function() {
        return (
          ((this.number1 +
            this.number2 +
            this.number3 +
            this.number4 +
            this.number5 +
            this.number6 -
            this.defective) *
            100) /
          (this.number1 +
            this.number2 +
            this.number3 +
            this.number4 +
            this.number5 +
            this.number6)
        ).toFixed(2);
      }
    },
    OEE: {
      get: function() {
        return (
          (this.availability * this.performance * this.quality) /
          10000
        ).toFixed(2);
      }
    }
  },
  methods: {
    deleteFacility() {
      firebase
        .firestore()
        .collection("facilities")
        .doc(this.$route.params.id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          console.log("aaaaaaaaa: ", this.facilities);
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    }
  }
};
</script>


