
import { fetchData } from '../services/dataList'
export default {

  namespace: 'example',

  state: {
    dataList: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const res = yield call(fetchData, payload)
      yield put({
        type: 'save',
        payload: {
          dataList: res.data
        }
      })
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
