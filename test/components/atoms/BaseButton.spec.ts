import { shallowMount } from '@vue/test-utils'
import BaseButton from '~/atoms/BaseButton.vue'

describe('BaseButton.vue', () => {
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
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        onClick: jest.fn(),
      },
      slots: {
        default: '<p>slot test</p>'
      }
    })
    expect(wrapper.html()).toContain('<p>slot test</p>')
  }),
  test('simple onclick test', () => {
    // ボタンクリックのテスト（活性時）
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        onClick: jest.fn(),
      }
    })
    wrapper.find('div > button').trigger('click')
    expect(wrapper.props().onClick).toBeCalled()
  }),
  test('with parameter onclick test', () => {
    // ボタンクリック時のコールバックテスト
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        onClick: jest.fn(),
      }
    })
    const fnc = (v: string): string => v
    wrapper.props().onClick(fnc('test'))
    wrapper.find('div > button').trigger('click')
    expect(wrapper.props().onClick).toBeCalledWith('test')
  }),
  test('disabled button', () => {
    // ボタン非活性状態の確認
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        onClick: jest.fn(),
        isDisabled: true,
      }
    })
    expect(wrapper.find('div > button').attributes().disabled).toBeDefined()
  }),
  test('disabled button onclick test', () => {
    // ボタン非活性時のボタン押下テスト
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        onClick: jest.fn(),
        isDisabled: true,
      }
    })
    wrapper.find('div > button').trigger('click')
    expect(wrapper.props().onClick).not.toBeCalled()
  }),
  test('set modifier class', () => {
    // 動的class要素の設定テスト
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        onClick: jest.fn(),
        modifierClass: 'dummy'
      },
    })
    /*
     * templateタグ直下のタグのclassだったらこれでOK
     * <template>
     *   <button class="dummy1 dummy2">
     * 
     * console.log(wrapper.classes())
     * -> ['dummy1', 'dummy2']
     */
    // console.log(wrapper.classes())
    /*
     * templateタグの下にdiv > buttonという構造だった場合、findのセレクタを使用すること
     * <template>
     *   <div>
     *     <button class="dummy_1 dummy_2">
     * 
     * console.log(wrapper.find('div > button').classes())
     * -> ['dummy1', 'dummy2']
     * 
     * console.log(wrapper.classes())
     * -> [] // 上記だとdivタグの要素を取得しようとする
     */
    // console.log(wrapper.find('div > button').classes())
    // expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.find('div > button').classes()).toContain('dummy')
  }),
  test('set button size small', () => {
    // css用のclass要素の設定テスト
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        onClick: jest.fn(),
        sizeSmall: true
      }
    })
    // expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.find('div > button').classes()).toContain('button-size-small')
  })
})