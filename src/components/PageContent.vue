<template>
  <div id= "content" class="container">
    <h1>{{ page.pageTitle }}</h1>
    <p>{{ page.pageContent }}</p>
  </div>
</template>

<script>
export default {
  props: ["page"]
};
</script>
