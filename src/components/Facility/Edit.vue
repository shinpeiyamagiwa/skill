<template>
  <v-form>
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs6 class="py-0">
          <h1>設定変更</h1>
        </v-flex>
        <v-flex xs4 class="py-0">
          <router-link to="/">一覧画面へ</router-link>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="lastname" label="設備名" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <h5>ダウンタイム</h5>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="firstname" label="項目" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="lastname" label="時間" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="firstname" label="項目" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="lastname" label="時間" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="firstname" label="項目" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="lastname" label="時間" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="firstname" label="項目" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="lastname" label="時間" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="firstname" label="項目" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="lastname" label="時間" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="firstname" label="項目" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="lastname" label="時間" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <h5>理論サイクルタイム</h5>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="firstname" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="lastname" label="基準cタイム" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="firstname" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="lastname" label="基準cタイム" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="firstname" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="lastname" label="基準cタイム" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="firstname" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="lastname" label="基準cタイム" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="firstname" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="lastname" label="基準cタイム" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="firstname" label="製品" required height="10px"></v-text-field>
        </v-flex>
        <v-flex xs5 class="py-0">
          <v-text-field v-model="lastname" label="基準cタイム" required height="10px"></v-text-field>
        </v-flex>
      </v-layout>
      <div class="text-center">
        <router-link to="/">
          <v-btn small color="primary">変更完了</v-btn>
        </router-link>
      </div>
    </v-container>
  </v-form>
</template>

