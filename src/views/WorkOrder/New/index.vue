<template>
  <div class="order__wrapper">
    <div class="order__title">Create New Work Order</div>
    <div class="order__block">
      <div class="order__block-title">Choose Customer & Vehicle <span>*</span></div>
      <div class="order__block-inner">
        <Dropdown v-model="customer" :options="customers" searchPlaceholder="Type customer’s name" optionLabel="name" search @change="selectCustomer">
          <template #option="{option}">
            <div class="y-dropdown-item-custom">
              <i class="i-user" />
              <span>{{ option.name }}</span>
            </div>
          </template>
        </Dropdown>
        <Dropdown v-model="vehicle" :options="vehicles" :disabled="!customer">
          <template #value="{value}">
            <div class="y-dropdown-label-custom">
              <i class="i-directions_car" />
              <span v-if="value">{{ value.make }} {{ value.model }} {{ value.year }}</span>
              <span v-else>Choose customer’s vehicle</span>
            </div>
          </template>
          <template #option="{option}">
            <div class="y-dropdown-item-custom">
              <i class="i-directions_car" />
              <span>{{ option.make }} {{ option.model }} {{ option.year }}</span>
            </div>
          </template>
          <template #footer>
            <div class="y-dropdown-item-footer" @click="newCar">
              <i class="i-add_circle green" />
              <span>Add New Vehicle</span>
            </div>
          </template>
        </Dropdown>
        <div v-if="customer && vehicle" class="order__block-btns">
          <router-link to="/work-orders/board"><Button label="Cancel" border size="large" style="width: 100%" /></router-link>
          <Button label="Next" size="large" @click="next" />
        </div>
      </div>
    </div>
    <Button label="Cancel" icon="i-circle_close" circle border size="small" class="-back" @click="$router.back()" />
  </div>
</template>

<script>
import Dropdown from '@/components/Yaro/Dropdown'
import Button from '@/components/Yaro/Button'

import {mapState, mapActions, mapMutations} from 'vuex'
export default {
  name: 'WorkOrderNew',
  components: {Dropdown, Button},
  data() {
    return {
      customer: null,
      vehicle: null,
      vehicles: [],
      isLoading: false
    }
  },
  async created() {
    const {customer, vehicle} = this.interimData

    if (customer) {
      this.customer = customer
      this.selectCustomer({value: {uid: customer.uid}})
      this.vehicle = vehicle
    }
    try {
      this.isLoading = true
      await this.fetchCustomers()
    } finally {
      this.isLoading = false
    }
  },
  computed: {
    ...mapState({
      customers: s => {
        const customers = s.company.customers.customers
        return customers.map(c => {
          c.name = `${c.firstName} ${c.lastName}`
          return c
        })
      },
      interimData: s => s.workOrder.interimData
    })
  },
  methods: {
    ...mapActions({
      fetchCustomers: 'company/customers/fetch',
      fetchVehicles: 'company/vehicles/fetchVehicles'
    }),
    ...mapMutations({
      set: 'workOrder/setOrder',
      create: 'workOrder/create'
    }),
    async selectCustomer({value}) {
      this.vehicles = await this.fetchVehicles(value.uid)
    },
    next() {
      const {customer, vehicle} = this
      this.create({customer, vehicle})
      this.$router.push('/work-order/new/general')
    },
    newCar() {
      this.$router.push(`/customers/${this.customer.uid}/new-vehicle?back=work-order`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
