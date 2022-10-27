import {serviceList, historyList, partsKitsList} from '../data/cannedServices'
import _ from 'lodash'

export default {
  namespaced: true,

  state: {
    services: [],
    service: {},
    localService: null,
    activeService: {},
    history: []
  },
  mutations: {
    set(state, services) {
      state.services = services
    },
    setService(state, service) {
      state.service = service
    },
    setActiveService(state, service) {
      state.activeService = service
    },
    createService(state, service) {
      state.localService = service
    },
    add(state, service) {
      state.services.unshift(service)
      serviceList.unshift(service)
    },
    select(state, id) {
      const service = state.services.find(s => s.id === id)
      service.select = !service.select
    },

    update(state, service) {
      if (state.activeService.id) state.activeService = service
      const serIdx = state.services.findIndex(ser => ser.id === service.id)
      state.services.splice(serIdx, 1, service)
    },
    remove(state, id) {
      state.services = state.services.filter(service => service.id !== id)
    },
    // ================ Parts =================
    addPart(state, part) {
      const service = state.services.find(s => s.id === part.serviceID)
      service.parts.push(part)
    },
    removePart(state, part) {
      const service = state.services.find(s => s.id === part.serviceID)
      service.parts = service.parts.filter(p => p.id !== part.id)
    },
    updatePart(state, part) {
      const service = state.services.find(s => s.id === part.serviceID)
      const partIdx = service.parts.findIndex(p => p.id === part.id)
      service.parts.splice(partIdx, 1, part)
    },
    // =======================================
    setHistory(state, history) {
      state.history = history
    },
    // ================ PartsKit =================
    addPartsKit(_, partsKit) {
      partsKitsList.push(partsKit)
    }
  },
  actions: {
    async fetch({commit}, id) {
      try {
        const services = serviceList.filter(s => s.templateID === id)
        commit('set', services)
      } catch (err) {
        commit('setError', err, {root: true})
        throw err
      }
    },
    async find({commit}, id) {
      try {
        const services = serviceList.find(s => s.id === id)
        commit('set', services)
      } catch (err) {
        commit('setError', err, {root: true})
        throw err
      }
    },
    async create({commit}, {id, service}) {
      try {
        commit('add', service)
        commit('company/cardTemplates/incrementService', id, {root: true})
      } catch (err) {
        commit('setError', err, {root: true})
        throw err
      }
    },
    async update({commit}, {id, templateID, service}) {
      try {
        commit('update', service)
      } catch (err) {
        commit('setError', err, {root: true})
        throw err
      }
    },
    async delete({commit}, {id, templateID}) {
      try {
        commit('remove', id)
        commit('company/cardTemplates/decrementService', templateID, {root: true})
      } catch (err) {
        commit('setError', err, {root: true})
        throw err
      }
    },
    async fetchHistory({commit}, id) {
      try {
        const history = historyList.filter(s => s.templateID === id)
        commit('setHistory', history)
      } catch (err) {
        commit('setError', err, {root: true})
        throw err
      }
    },
    // ================ PartsKit =================
    async fetchPartsKits(_, id) {
      const serviceParts = partsKitsList.filter(k => k.serviceID === id)
      return serviceParts
    }
  }
}
