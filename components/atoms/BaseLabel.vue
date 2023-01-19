<template>
  <component
    :id="modifierId"
    :is="tagName"
    class="base-label"
    :class="[modifierClass, `label-size-${labelSize}`]"
    >{{ label }}
  </component>
</template>

<script lang="ts">
export default {
  name: "BaseLabel"
}
</script>

<script setup lang="ts">
import { SizeTypers } from '@nuxt/types'
import { PropType } from "vue"

const props = defineProps({
  tagName: {
    type: String,
    default: 'p',
  },
  modifierId: {
    type: String,
    require: true,
  },
  label: {
    type: String,
    default: '',
  },
  modifierClass: {
    type: String,
    require: false,
  },
  defineSize: {
    type: String as PropType<SizeTypers>,
  }
})
const nuxtApp = useNuxtApp()
const labelSize = nuxtApp.$getStyle(props.defineSize)
</script>
