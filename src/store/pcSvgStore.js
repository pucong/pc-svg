export const UP_ZOOM_RATE = 'UP_ZOOM_RATE'
export const UP_PCSVG_MAIN_CONTAINER_OPT = 'UP_PCSVG_MAIN_CONTAINER_OPT'
export const UP_PCSVG_MAIN_OPT = 'UP_PCSVG_MAIN_OPT'
export const GET_ZOOM_RATE = 'GET_ZOOM_RATE'
export const GET_PCSVG_MAIN_CONTAINER_OPT = 'GET_PCSVG_MAIN_CONTAINER_OPT'
export const GET_PCSVG_MAIN_OPT = 'GET_PCSVG_MAIN_OPT'
export const GET_PCSVG_OPT = 'GET_PCSVG_OPT'

const store = {
  namespaced: true,
  state: {
    // 画布缩放比例
    scaleNum: 1,
    // 最外层显示栏的相对位置
    pcSvgMainContainerOpt: {
      top: 1,
      left: 1
    },
    // 里层显示栏的相对位置
    pcSvgMainOpt: {
      top: 1,
      left: 1
    },
    svg: {  // 图形参数默认值
      type: 'circle',
      innerColor: 'rgba(53, 109, 222, 0.3)',
      left: 100,
      top: 100,
      pcWidth: 100,
      pcHeight: 100,
      position: 'absolute',
      shwFootFont: false,
      footerFont: 'pcSvg',
      inputFont: 'pcSvg',
      options: { // 其他参数

      }
    }
  },
  mutations: {
    // 画布缩放比例
    [UP_ZOOM_RATE] (state, payload) {
      state.scaleNum = payload.val
    },
    // 最外层显示栏的相对位置
    [UP_PCSVG_MAIN_CONTAINER_OPT] (state, payload) {
      state.pcSvgMainContainerOpt = payload.val
    },
    // 里层显示栏的相对位置
    [UP_PCSVG_MAIN_OPT] (state, payload) {
      state.pcSvgMainOpt = payload.val
    }
  },
  actions: {

  },
  getters: {
    [GET_ZOOM_RATE]: state => {
      return state.scaleNum
    },
    [GET_PCSVG_MAIN_CONTAINER_OPT]: state => {
      return state.pcSvgMainContainerOpt
    },
    [GET_PCSVG_MAIN_OPT]: state => {
      return state.pcSvgMainOpt
    },
    [GET_PCSVG_OPT]: state => {
      return state.svg
    }
  }
}

export default store
