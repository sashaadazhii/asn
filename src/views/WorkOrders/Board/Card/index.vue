<template>
  <div class="card" @click="selectOrder">
    <div class="card__header">
      <Label
        :label="order.customStatus?.name || order.logicalStatus"
        size="small"
        :color="order.customStatus?.color"
        circle
        :class="statusClass(order.logicalStatus)"
        :icon="statusIcon(order.logicalStatus)"
      />
      <Menu :list="actionsList" />
    </div>
    <div v-if="showMainBlock" class="card__main">
      <div v-if="order.timeComing || order.timePromised" class="card__date">
        <span><i class="i-timer orange" /> {{ dayjs(order.timeComing).format('DD MMM hh:mm A') }}</span>
        <span><i class="i-timer green" /> {{ dayjs(order.timePromised).format('DD MMM hh:mm A') }}</span>
      </div>
      <div v-if="order.customer" class="card__tech">
        <i class="i-user" />
        <span>{{ order.customer.name || order.customer.firstName + ' ' + order.customer.lastName }}</span>
        <!-- <span>{{ order.customer.name }}</span> -->
      </div>
      <div v-if="order.vehicle" class="card__tech">
        <i class="i-directions_car" />
        <span>{{ order.vehicle.make }} {{ order.vehicle.model }} {{ order.vehicle.year }}</span>
      </div>
      <div v-if="showAdditional" class="card__additional">
        <i v-if="order.vehicleInShop" class="i-directions_car" />
        <i v-if="order.talkSA" class="i-headset_mic" />
        <i v-if="order.partsOrdered" class="i-build" />
      </div>
    </div>
    <div v-if="showFooterBlock" class="card__footer">
      <Label
        v-if="order.customerRequests"
        :label="`${order.customerRequests.length} Requests`"
        icon="i-request"
        iconColor="#2C9AFF"
        border
        size="small"
        class="-blue"
        iconSize="16px"
        :class="{'-active': displayReq}"
        ref="reqs"
        @click.prevent="openReq"
      />
      <Label
        v-if="order.notes"
        :label="`${order.notes.length} Notes`"
        icon="i-article_menu"
        :iconColor="display ? '#fff' : '#6B7280'"
        border
        size="small"
        class="-grey"
        :class="{'-active': display}"
        iconSize="16px"
        ref="notes"
        @click.prevent="open"
      />

      <div class="-full" />
      <Label v-if="order.serviceAdvisor" :alias="order.serviceAdvisor.alias" size="small" circle />
      <Label v-if="order.technician" :alias="order.technician.alias" size="small" circle color="#6B7280" />
    </div>
    <Popup v-model:visible="display" :targetElement="target" :notes="order.notes" />
    <PopupReq v-model:visible="displayReq" :targetElement="target" :requests="order.customerRequests" />
  </div>
</template>

<script>
import Label from '@/components/Yaro/Label'
import Menu from '@/components/Yaro/Menu'
import Popup from './Popup'
import PopupReq from './PopupRequest'
import {mapMutations} from 'vuex'

import dayjs from 'dayjs'
export default {
  name: 'WorkOrderCard',
  components: {Label, Menu, Popup, PopupReq},
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dayjs,
      showAdditional: false,
      showMainBlock: false,
      showFooterBlock: false,
      actionsList: [],
      display: false,
      displayReq: false,
      target: null
    }
  },
  created() {
    const {vehicleInShop, talkSA, partsOrdered, customerRequests, startsAt, customer, vehicle, scheduling, notes, technician, serviceAdvisor} = this.order
    if (vehicleInShop || talkSA || partsOrdered) this.showAdditional = true
    if (startsAt || customer || vehicle || this.showAdditional || scheduling) this.showMainBlock = true
    if (customerRequests || notes || serviceAdvisor || technician) this.showFooterBlock = true
  },
  methods: {
    ...mapMutations({
      set: 'workOrder/setOrder'
    }),
    selectOrder(e) {
      if (this.$refs.notes) {
        if (!this.$refs.notes || this.$refs.notes?.$el.contains(e.target)) return
      }
      if (this.$refs.reqs) {
        if (!this.$refs.reqs || this.$refs.reqs?.$el.contains(e.target)) return
      }
      this.set(this.order)
      this.$router.push(`/work-order/${this.order.uid}/vehicle-health`)
    },
    statusClass(status) {
      return {
        card__status: true,
        '-none': status === 'Not Scheduled',
        '-grey': status === 'Not Started'
      }
    },
    statusIcon(status) {
      switch (status) {
        case 'Not Scheduled':
          return 'i-rp_not_scheduled'
        case 'To Do':
          return 'i-rp_to_do'
        case 'Not Started':
          return 'i-rp_not_started'
        case 'In Progress':
          return 'i-rp_in_progress'
        case 'Done':
          return 'i-rp_done'
      }
    },
    open(e) {
      if (this.display) {
        this.display = false
        this.target = null
        return
      }
      this.target = e.currentTarget
      this.display = true
    },
    openReq(e) {
      if (this.displayReq) {
        this.displayReq = false
        this.target = null
        return
      }
      this.target = e.currentTarget
      this.displayReq = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
