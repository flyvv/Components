import { Effect, Reducer, Subscription, request } from 'umi';

export interface StudyModelState {
  name: string
  count: number
}

export interface StudyModelType {
  namespace: 'study';
  state: StudyModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<StudyModelState>;
    changecount: Reducer<StudyModelState>;
  };
  subscriptions: { setup: Subscription };
}

const StudyModel: StudyModelType = {
  namespace: 'study',

  state: {
    name: 'study',
    
    count: 0
  },

  effects: {
    *query({ payload }, { call, put }) {
      const data = yield request('/web201605/js/item.json');
      yield put({
        type: 'save',
        payload: {
          items: data,
        },
      });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    changecount(state,action){
      return {
        ...state,
        ...action.payload,
      };
    },

  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/item') {
          dispatch({
            type: 'query'
          })
        }
      });
    }
  },
};

export default StudyModel