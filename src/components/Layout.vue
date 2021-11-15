<template>
  <div class="card m-4">
    <div class="card-header">
      {{ cardHeader }}
    </div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',

  props: {
    cardHeader:{
      type: String,
      default: null
    }
  }
}
</script>