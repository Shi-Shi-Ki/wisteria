<template>
  <button
    :id="modifierId"
    class="base-button"
    :class="[modifierClass, `button-size-${buttonSize}`]"
    :disabled="isDisabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: "BaseButton"
}
</script>

<script setup lang="ts">
import { SizeTypers } from '@nuxt/types'
import { PropType } from "vue"

const props = defineProps({
  onClick: {
    type: Function as PropType<() => void>,
    require: true,
  },
  modifierId: {
    type: String,
    require: true,
  },
  modifierClass: {
    type: String,
    require: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  defineSize: {
    type: String as PropType<SizeTypers>,
  }
})
const nuxtApp = useNuxtApp()
const buttonSize = nuxtApp.$getStyle(props.defineSize)
</script>