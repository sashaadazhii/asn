import axios from 'axios'
import status from './workOrderStatuses'
import questions from './questions'
import {workOrders as localOrders} from '../data/workOrders'
import {workOrder as localOrder} from '../data/workOrder'

export default {
  namespaced: true,
  state: {
    workOrders: {},
    workOrder: localOrder,
    localOrders: localOrders,
    notes: null, // Initial Walkaround
    initialWalkaround: false,
    isStart: false,
    interimData: {}
  },
  mutations: {
    set(state, workOrders) {
      state.workOrders = workOrders
    },
    create(state, {vehicle, customer}) {
      const {uid, firstName, lastName, cellPhones} = customer
      const {uid: vehicleUID, make, model, year, currentOdometer} = vehicle
      const order = {
        // =============== Info =============
        customer: {uid, firstName, lastName, cellPhones},
        vehicle: {vehicleUID, make, model, year, currentOdometer},
        // =============== Settings =============
        vehicleInShop: false,
        talkSA: false,
        partsOrdered: false,
        timeComing: null,
        timePromised: null,
        // startsAt: null,
        // endsAt: null,
        technician: null,
        serviceAdvisor: null,
        // =============== Notes =============
        notes: null,
        // =============== Scheduling =============
        scheduling: null,
        schedulingTime: {all: 0, planned: 0},
        // =============== Options =============
        needRide: null,
        courtesyVehicle: null,
        // =============== Questions =============
        // =============== Requests =============
        customRequests: null,
        logicalStatus: 'Not Started'
      }
      state.workOrder = order
    },
    // =================================
    change(state, param) {
      state.workOrder = {...state.workOrder, ...param}
    },
    changeNeedRide(state, param) {
      param ? (state.workOrder.needRide = {...state.workOrder.needRide, ...param}) : (state.workOrder.needRide = null)
    },
    changeCourtesyVehicle(state, param) {
      param ? (state.workOrder.courtesyVehicle = {...state.workOrder.courtesyVehicle, ...param}) : (state.workOrder.courtesyVehicle = null)
    },
    changeScheduling(state, param) {
      param ? (state.workOrder.scheduling = [...param]) : (state.workOrder.scheduling = null)
      const time = param.reduce((sum, current) => sum + current.time, 0)
      state.workOrder.schedulingTime ||= {all: 12, planned: 0}
      state.workOrder.schedulingTime.planned = time
    },
    // =================================
    setOrder(state, order) {
      state.workOrder = order
    },
    add(state, order) {
      if (state.workOrders.todo) state.workOrders.todo.unshift(order)
    },
    reset(state) {
      state.workOrders = []
      state.page = 1
    },
    addNotes(state, note) {
      state.workOrder.notes ||= []
      state.workOrder.notes.unshift(note)
    },
    // =========== Initial Walkaround ===========
    changeNotes(state, {note, action}) {
      if (!note) {
        state.notes = null
        return
      }
      state.notes ||= []
      if (action === 'delete') {
        state.notes = state.notes.filter(n => n.id !== note.id)
        return
      }
      state.notes.unshift(note)
    },
    changeInitial(state) {
      state.initialWalkaround = true
    },
    // =========== Initial Walkaround ===========
    startOrder(state, type) {
      state.isStart = !!type
    },
    // =========== Intermediate Data in Create Car from Work Order===========
    setInterimData(state, data) {
      state.interimData = data
    },
    // ==================================
    setFilters(state, techs) {
      let orders = {}
      if (techs && techs.length) {
        orders.done = localOrders.done.filter(od => techs.some(t => t === od.technician?.id))
        orders.inProgress = localOrders.inProgress.filter(od => techs.some(t => t === od.technician?.id))
        orders.todo = localOrders.todo.filter(od => techs.some(t => t === od.technician?.id))
        orders.unscheduled = localOrders.unscheduled.filter(od => techs.some(t => t === od.technician?.id))
      } else {
        orders = localOrders
      }
      state.workOrders = orders
    }
  },
  actions: {
    async create({commit}, order) {
      try {
        order.uid = Math.floor(Math.random() * 10000)
        commit('add', order)
        return order
      } catch (err) {
        commit('setError', err, {root: true})
        throw err
      }
    },
    async fetchBoard({commit}, params) {
      try {
        commit('set', localOrders)
      } catch (err) {
        commit('setError', err, {root: true})
        throw err
      }
    },
    async find({commit}, uid) {
      try {
        const order = localOrders.todo.find(s => s.uid === uid)
        commit('setOrder', order)
      } catch (err) {
        commit('setError', err, {root: true})
        throw err
      }
    },
    async updateStatus({commit}, {uid, params}) {
      const url = process.env.VUE_APP_BACKEND
      try {
        return await axios.put(`${url}work-orders/${uid}/status`, params)
      } catch (err) {
        commit('setError', err, {root: true})
        throw err
      }
    },
    async scheduleOrder({commit}, {uid, params}) {
      const url = process.env.VUE_APP_BACKEND
      try {
        return await axios.put(`${url}work-orders/${uid}/schedule`, params)
      } catch (err) {
        commit('setError', err, {root: true})
        throw err
      }
    }
  },
  modules: {status, questions}
}
