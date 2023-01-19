<template>
  <base-button :modifierId="'test_button'" :onClick="handleClick" :defineSize="buttonDefineSize" >
    <base-label :modifierId="'test_label'" :label="'TEST BUTTON'" :defineSize="labelDefileSize" />
  </base-button>
</template>

<script setup lang="ts">
import { defineComponent, SetupContext } from 'vue'
import BaseButton from '../components/atoms/BaseButton.vue'
import BaseLabel from '../components/atoms/BaseLabel.vue'

defineComponent({
  BaseButton,
  BaseLabel
})
const nuxtApp = useNuxtApp()
const types = nuxtApp.$getSizeTypeList()
const buttonDefineSize = types.LARGE
const labelDefileSize = types.MIDDLE
const handleClick = () => {
  console.log('AAA')
}
</script>
