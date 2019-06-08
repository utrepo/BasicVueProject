<template>
  <div class="sampleDiv">
    <span>Rendered data value: {{message}}</span>
  </div>
</template>

<script>
  export default {
    name: "dataRendering",
    data() {
      return {
        message: "Hello Vue"
      };
    }
  };
</script>

<style>
  .sampleDiv {
    float: left;
  }
</style>
