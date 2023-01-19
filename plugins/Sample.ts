export const SizeTypeList = {
  SMALL: 'small',
  MIDDLE: 'middle',
  LARGE: 'large',
} as const
export type SizeTypes = typeof SizeTypeList[keyof typeof SizeTypeList]

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('hello', (msg: string) => `Hello ${msg}!`)
  nuxtApp.provide('getStyle', (props: SizeTypes | undefined): string => {
    if (!props) {
      return SizeTypeList.SMALL
    }
    return props
  })
  nuxtApp.provide('getSizeTypeList', (): typeof SizeTypeList => {
    return SizeTypeList
  })
})
