<template>
  <div class="sampleDiv">
    <span>{{this.$store.getters["studentName"]}}</span>
    <br /><br />
    <span>Rendered data value: {{message}}</span>
    <br /><br />
    <button @click="clickMethodChange">Change rendered value</button>
    <br /><br />
    <button @click="clickMethodReset">Reset rendered value</button>
    <br /><br />
    <input value="Without Binding"></input>
    <br /><br />
    <input :value="withBinding"></input>
    <br /><br />
    <input :value="withBinding" v-on:keyup.enter="enterEvent"></input>
    <br /><br />
    <span>Rates: {{rates}}</span>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "vuePracticesExtended",
    data() {
      return {
        message: "Hello Vue",
        withBinding: "With Binding",
        rates: {}
      };
    },
    methods: {
      clickMethodChange: function() {
        this.message = "See you Vue";
      },
      clickMethodReset: function() {
        this.message = "Hello Vue";
      },
      enterEvent: function() {
        this.message = "You pressed enter";
      }
    },
    mounted() {
      this.message = "Hooked at mounted";
      axios
        .get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
        .then(response => {
          this.rates = response.data;
        });
    }
  };
</script>

<style>
  .sampleDiv {
    float: left;
  }
</style>
