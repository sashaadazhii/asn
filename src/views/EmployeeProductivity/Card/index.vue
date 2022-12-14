<template>
  <div class="card">
    <div class="card__header">
      <Label
        :label="order.customStatus?.name || order.logicalStatus"
        size="small"
        :color="order.customStatus?.color"
        circle
        :class="statusClass(order.logicalStatus)"
        :icon="statusIcon(order.logicalStatus)"
      />
    </div>
    <div v-if="showMainBlock" class="card__main">
      <div v-if="order.startsAt" class="card__date">
        <span><i class="i-timer orange" /> {{ dayjs(order.startsAt).format('DD MMM hh:mm A') }}</span>
        <span><i class="i-timer green" /> {{ dayjs(order.endsAt).format('DD MMM hh:mm A') }}</span>
      </div>
      <div v-if="order.customer" class="card__tech">
        <i class="i-user" />
        <span>{{ order.customer.name }}</span>
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
      />
      <Label
        v-if="order.notes"
        :label="`${order.notes.length} Notes`"
        icon="i-article_menu"
        iconColor="#6B7280"
        border
        size="small"
        class="-grey"
        iconSize="16px"
      />
      <div class="-full" />
      <Label v-if="order.serviceAdvisor" :alias="order.serviceAdvisor.alias" size="small" circle />
      <Label v-if="order.technician" :alias="order.technician.alias" size="small" circle color="#6B7280" />
    </div>
  </div>
</template>

<script>
import Label from '@/components/Yaro/Label'
import dayjs from 'dayjs'
export default {
  name: 'WorkOrderCard',
  components: {Label},
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
      actionsList: []
    }
  },
  created() {
    const {
      vehicleInShop,
      talkSA,
      partsOrdered,
      customerRequests,
      startsAt,
      customer,
      vehicle,
      scheduling,
      notes,
      technician,
      serviceAdvisor
    } = this.order
    if (vehicleInShop || talkSA || partsOrdered || customerRequests) this.showAdditional = true
    if (startsAt || customer || vehicle || this.showAdditional || scheduling) this.showMainBlock = true
    if (customerRequests || notes || serviceAdvisor || technician) this.showFooterBlock = true
  },
  methods: {
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
