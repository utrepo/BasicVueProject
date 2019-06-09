<template>
  <div class="sampleDiv">
    <span>{{this.$store.getters["studentName"]}}</span>
    <br /><br />
    <question-extended v-model="result1" questionContent="What about examples?">
      <template v-slot:header>
        <br /><span style="color:red"> !!!Important Question </span><br />
      </template>
    </question-extended>
    <br /><br />
    <question-extended v-model="result2" questionContent="What about teachers?">
      <template v-slot:footer>
        <br /><span style="color:blue"> Hope the answer will be great. </span><br />
      </template>
    </question-extended>
    <br /><br />
    <question-extended v-model="result3" questionContent="What about presentations?"></question-extended>
    <br /><br />
    <question-extended v-model="result4" questionContent="What about Vue?"></question-extended>
    <br /><br />
    <question-extended @commentEntered="thanks" questionContent="Do you have any comment?" :isMulti="false"></question-extended>
    <br /><br />
    <span>Average Result: {{averageResult}}</span>
    <br /><br />
    <span>Your comment: {{thanksValue}}</span>
  </div>
</template>

<script>
  export default {
    name: "vueQuestionnaireextended",
    data() {
      return {
        result1: 0,
        result2: 0,
        result3: 0,
        result4: 0,
        thanksValue: ""
      };
    },
    computed: {
      averageResult: function() {
        return (this.result1 + this.result2 + this.result3 + this.result4) / 4;
      }
    },
    methods: {
      thanks: function(val) {
        if (val && val.trim() !== "") {
          this.thanksValue = "Thank you for your comment";
        } else {
          this.thanksValue = "";
        }
      }
    },
    mounted() {
      this.$store.dispatch("setStudentName", "Umut Tozlu");
    }
  };
</script>

<style>
  .sampleDiv {
    float: left;
  }
</style>
