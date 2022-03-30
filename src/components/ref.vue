<template>
  <h1>姓名：{{name}}</h1>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'RefCom',
  setup() {
    let name = ref('测试')
    return {
      name
    }
  }
}
</script>
<style scoped>

</style>
