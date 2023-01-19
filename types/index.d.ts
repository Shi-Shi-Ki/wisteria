import { IComponentStyle, SizeTypes, SizeTypeList } from "@/plugins/ComponentStyle"

declare module 'vue/types/vue' {
  interface Vue {
    readonly $componentStyle: IComponentStyle
    readonly $getSizeTypeList: typeof SizeTypeList
  }
  type SizeTypers = SizeTypes
  type SizeTypeObj = typeof SizeTypeList
}

declare module '@nuxt/types' {
  interface Context {
    readonly $componentStyle: IComponentStyle
    readonly $getSizeTypeList: typeof SizeTypeList
  }
  interface NuxtAppOptions {
    readonly $componentStyle: IComponentStyle
    readonly $getSizeTypeList: typeof SizeTypeList
  }
  type SizeTypers = SizeTypes
  type SizeTypeObj = typeof SizeTypeList
}

declare module '#app' {
  interface NuxtApp {
    $hello (msg: string): string
    $getStyle (props: SizeTypes | undefined): string
    $getSizeTypeList(): typeof SizeTypeList
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $hello (msg: string): string
    $getStyle (props: SizeTypes | undefined): string
    $getSizeTypeList(): typeof SizeTypeList
  }
}
