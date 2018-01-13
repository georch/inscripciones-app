<template>
  <div class="help is-size-7">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HelpBlock',
};
</script>

<style scoped>
.help {
  margin: .5em 0 1em;
  padding: .5em 1em;
  color: #8a6d3b;
  background: #fcf8e3;
  border: 1px solid #faebcc;
  border-radius: 4px;
}
</style>
