<template>
  <div class="block__wrapper">
    <div class="block__title">main settings</div>
    <div class="block__row">
      <div class="block__cell">
        <i class="i-directions_car" :class="{'-green': order.vehicleInShop}" />
        <span>Vehicle is at the shop</span>
      </div>
      <Switch :modelValue="order.vehicleInShop" @click="change({vehicleInShop: !order.vehicleInShop})" />
    </div>
    <div class="block__row">
      <div class="block__cell">
        <i class="i-headset_mic" :class="{'-green': order.talkSA}" />
        <span>Talk to SA before start</span>
      </div>
      <Switch :modelValue="order.talkSA" @click="change({talkSA: !order.talkSA})" />
    </div>
    <div class="block__row">
      <div class="block__cell">
        <i class="i-build" :class="{'-green': order.partsOrdered}" />
        <span>Parts ordered</span>
      </div>
      <Switch :modelValue="order.partsOrdered" @click="change({partsOrdered: !order.partsOrdered})" />
    </div>
    <DatePicker :modelValue="order.timeComing" mode="dateTime" :minute-increment="5" locale="en-Ca" @update:modelValue="change({timeComing: $event})">
      <!-- <DatePicker :modelValue="order.startsAt" mode="dateTime" :minute-increment="5" locale="en-Ca" @update:modelValue="change({startsAt: $event})">
       -->
      <template v-slot="{inputValue, inputEvents}">
        <Input :modelValue="`${inputValue}`" v-on="inputEvents" title="Time coming" required iconLeft="i-timer orange" placeholder="Choose time & date" />
      </template>
    </DatePicker>
    <DatePicker :modelValue="order.timePromised" mode="dateTime" :minute-increment="5" locale="en-Ca" @update:modelValue="change({timePromised: $event})">
      <!-- <DatePicker :modelValue="order.endsAt" mode="dateTime" :minute-increment="5" locale="en-Ca" @update:modelValue="change({endsAt: $event})"> -->
      <template v-slot="{inputValue, inputEvents}">
        <Input :modelValue="`${inputValue}`" v-on="inputEvents" title="Time promised" iconLeft="i-timer green" placeholder="Choose time & date" />
      </template>
    </DatePicker>
    <Dropdown :modelValue="order.technician" :options="techList" title="Responsible Technician" @change="change({technician: $event.value})">
      <template #value="{value}">
        <div class="y-dropdown-label-custom">
          <i class="i-user1 green" />
          <span v-if="value">{{ value.firstName }} {{ value.lastName }}</span>
          <span v-else class="-placeholder">Choose Technician</span>
        </div>
      </template>
      <template #option="{option}">
        <div class="y-dropdown-item-custom">
          <i class="i-work_order green" />
          <span>{{ option.firstName }} {{ option.lastName }}</span>
        </div>
      </template>
    </Dropdown>
    <Dropdown :modelValue="order.serviceAdvisor" :options="saList" title="Responsible Service Advisor" @change="change({serviceAdvisor: $event.value})">
      <template #value="{value}">
        <div class="y-dropdown-label-custom">
          <i class="i-user1 blue" />
          <span v-if="value">{{ value.firstName }} {{ value.lastName }}</span>
          <span v-else class="-placeholder">Choose Service Advisor</span>
        </div>
      </template>
      <template #option="{option}">
        <div class="y-dropdown-item-custom">
          <i class="i-work_order blue" />
          <span>{{ option.firstName }} {{ option.lastName }}</span>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script>
import Switch from '@/components/Yaro/Switch'
import {DatePicker} from 'v-calendar'
import Input from '@/components/Yaro/Input'
import Dropdown from '@/components/Yaro/Dropdown'
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'WorkOrderGeneralSettings',
  components: {Switch, DatePicker, Input, Dropdown},
  data() {
    return {
      techList: [],
      saList: []
    }
  },
  async created() {
    this.techList = await this.searchUsers({role: 'technician'})
    this.saList = await this.searchUsers({role: 'service-advisor'})
  },
  computed: {
    ...mapState({
      order: s => s.workOrder.workOrder
    })
  },
  methods: {
    ...mapMutations({
      change: 'workOrder/change'
    }),
    ...mapActions({
      searchUsers: 'company/users/search'
    })
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
