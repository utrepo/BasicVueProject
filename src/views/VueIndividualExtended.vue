<template>
  <div class="sampleDiv">
    <span>{{this.$store.getters["studentName"]}}</span>
    <br /><br />
    <span>Individual</span>
    <br /><br />
    <span>Full name: {{fullname}}</span>
    <br /><br />
    <span>{{fullname}} has:</span>
    <span v-if="nameCount===1">One name</span>
    <span v-else-if="nameCount===2">Two names</span>
    <span v-else>More than two names</span>
    <br /><br />
    <div class="sampleDiv" v-for="(gender, index) in genders" v-bind:key="index">
      <input type="radio">{{gender.label}} </input>
    </div>
    <br /><br />
    <button @click="incrementAge">Age +1</button>
    <button @click="decrementAge">Age -1</button>
    <span> Age : {{ageCount}}</span>
    <br /><br />
    <span>Works at: {{worksAt}}</span>
    <br /><br />
    <input v-model="worksAt"></input>
  </div>
</template>

<script>
  export default {
    name: "vueIndividualextended",
    data() {
      return {
        name: "Umut",
        surname: "Tozlu",
        nameCount: 0,
        genders: [{ label: "Male" }, { label: "Female" }],
        ageCount: 0,
        worksAt: ""
      };
    },
    mounted() {
      this.name = "Cavit Engin";
      var nameArr = this.name.split(" ");
      this.nameCount = nameArr.length;
    },
    computed: {
      fullname: function() {
        return this.name + " " + this.surname;
      }
    },
    watch: {
      name: function() {
        this.surname = "Bilici";
      }
    },
    methods: {
      incrementAge: function() {
        this.ageCount += 1;
      },
      decrementAge: function() {
        this.ageCount -= 1;
      }
    }
  };
</script>

<style>
  .sampleDiv {
    float: left;
  }
</style>
