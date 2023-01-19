// import { shallowMount } from '@vue/test-utils'
import { config, mount } from '@vue/test-utils'
import BaseButton from '@/components/atoms/BaseButton.vue'
// import * as nuxt from '#app'
// import { useNuxtApp } from '#app'

// const useNuxtAppMock = jest.fn()
// config.global.stubs = {
//   useNuxtAppMock
// }
describe('BaseButton.vue', () => {
  beforeAll(() => {
    jest.mock('#app', () => {
      return {
        useNuxtApp() {
          return jest.fn()
        }
      }
    })
  })
  /*
   * パラメータの使い回しもいいけど、onClickの設定で思わぬ挙動を起こす
   * constでbasePropsDataをコピーしてonClickにmockの設定を入れると、以降のテストに影響が出てしまうので注意!
   * これはシャローコピー（オブジェクト型は参照渡し）であるため、安易にonClickの内容を書き換えると、次のテスト項目で変更したものがそのまま使われてしまう
   */
  // const basePropsData = {
  //   onClick: jest.fn(),
  //   modifierClass: 'dummy',
  //   isDisabled: false,
  // }
  test('slot tag test', () => {
    // slotタグのテスト
    // const mock = jest.spyOn(nuxt, 'useNuxtApp')
    // mock.mockImplementation(() => {})
    const wrapper = mount(BaseButton, {
      props: {
        modifierId: 'dummy_id',
        onClick: jest.fn(),
      },
      slots: {
        default: '<p>slot test</p>',
      },
      // mocks: {
      //   $nuxt: {
      //     context: {
      //       app: {
      //         $componentStyle: {
      //           getStyle: jest.fn(),
      //           // https://zenn.dev/woo_noo/articles/0c6fac1020468e19c805
      //           // https://github.com/nuxt-community/composition-api/issues/248#issuecomment-775846990
      //           // returnしたい時は以下のようにする
      //           // getStyle: jest.fn(() => 'small'),
      //         },
      //       },
      //     },
      //   },
      // },
      global: {
        // components: {
        //   useNuxtApp: () => jest.fn()
        // }
        // stubs: {
        //   useNuxtApp: () => jest.fn()
        // }
      }
    })
    // jest.mock('useNuxtApp', () => {
    //   return {
    //     $getStyle: jest.fn().mockImplementation((param: string) => param)
    //   }
    // })
    expect(wrapper.html()).toContain('<p>slot test</p>')
  })

})