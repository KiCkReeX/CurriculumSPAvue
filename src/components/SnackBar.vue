<!-- Snackbar.vue -->
<template>
  <div :class="['snackbar', type]" v-show="visible">
    {{ message }}
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  message: String,
  type: {
    type: String,
    default: 'info', // success, error, warning
  },
})

const visible = ref(false)

onMounted(() => {
  visible.value = true
})
</script>

<style scoped>
.snackbar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 1em 2em;
  border-radius: 5px;
  opacity: 0.9;
  z-index: 9999;
  transition: opacity 0.3s ease;
}

.snackbar.success {
  background-color: #4caf50;
}

.snackbar.error {
  background-color: #f44336;
}

.snackbar.warning {
  background-color: #ff9800;
}

.snackbar.info {
  background-color: #2196f3;
}
</style>
