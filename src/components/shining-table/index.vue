<template>
  <div class="">
    <el-button>{{ btnTitle }}</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElButton } from 'element-plus'

const btnTitle = ref('按钮名称')
</script>

<style lang="scss" scoped></style>
