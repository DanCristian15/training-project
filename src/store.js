import Vue from 'vue'
import Vuex from 'vuex'
import { records } from './data/records'

Vue.use( Vuex );

export default new Vuex.Store({
    state: {
      recordsArray: records
    },
    getters: {
      findRecordById: state => ( id ) => {
        return state.recordsArray.find ( item  => item.id === id )
      }
    }
  })