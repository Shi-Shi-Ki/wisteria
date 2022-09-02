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
import { defineComponent, computed, PropType } from '@nuxtjs/composition-api'

export default defineComponent ({
  name: 'BaseButton',
  props: {
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
    sizeSmall: {
      type: Boolean,
      default: false,
    },
    sizeMiddle: {
      type: Boolean,
      default: false,
    },
    sizeLarge: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const buttonSize = computed(() => {
      if (props.sizeSmall) {
        return 'small'
      } else if (props.sizeMiddle) {
        return 'middle'
      } else if (props.sizeLarge) {
        return 'large'
      } else {
        return 'small'
      }
    })
    return {
      buttonSize
    }
  },
})
</script>