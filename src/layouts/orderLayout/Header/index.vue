<template>
  <div class="header__wrapper">
    <div class="header__title">
      <span v-if="isNew">Create new Work Order</span>
      <Label
        v-else
        :label="order.customStatus?.name || order.logicalStatus"
        size="small"
        :color="order.customStatus?.color"
        circle
        :class="statusClass(order.logicalStatus)"
        :icon="statusIcon(order.logicalStatus)"
      />
      <span v-if="!isNew">Work Order</span>
      <Label v-if="order.vehicleInShop" class="header__label" icon="i-directions_car" border iconSize="18px" size="large" />
      <Label v-if="order.talkSA" class="header__label" icon="i-help" border iconColor="#FF9B70" iconSize="18px" size="large" />
      <Label v-if="order.partsOrdered" class="header__label" icon="i-build" border iconColor="#6B7280" iconSize="18px" size="large" />
    </div>
    <div class="header__nav">
      <router-link v-if="uid === 'new'" class="header__nav-link" :to="`/work-order/${uid}/general`">General</router-link>
      <router-link class="header__nav-link" :to="`/work-order/${uid}/vehicle-health`">Vehicle Health</router-link>
      <router-link class="header__nav-link" :to="`/work-order/${uid}/vehicle-info`">Vehicle Info</router-link>
    </div>
    <div v-if="isNew" class="header__menu">
      <router-link :to="'/work-orders/board'"><Button label="Cancel" border grey /></router-link>
      <router-link :to="'/work-orders/board'"><Button label="Save" @click="createOrder()" /></router-link>
    </div>
    <div v-else class="header__menu">
      <Label v-if="!isStart" icon="i-lock orange" label="View Only" border class="-orange" size="large" />
      <div v-if="!isStart" class="header__timer" :class="{'-start': isStart}" @click="start">
        <div v-if="!isStart" class="header__timer-start"><i class="i-play_circle_filled" /> <span>Start Work Order</span></div>
      </div>
      <Button icon="i-circle_close" border circle size="small" @click="close" />
    </div>
  </div>
</template>

<script>
import Mileage from './Mileage'
import Button from '@/components/Yaro/Button'
import Label from '@/components/Yaro/Label'
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'OrderHeader',
  components: {Button, Label},
  data() {
    return {
      uid: this.$route.params.uid,
      isNew: true,
      isStart: false,
      isFlow: false
    }
  },
  created() {
    if (this.uid !== 'new') this.isNew = false
  },
  computed: {
    ...mapState({
      order: s => s.workOrder.workOrder
    })
  },
  methods: {
    ...mapMutations({
      startOrder: 'workOrder/startOrder'
      // add: 'workOrder/add'
    }),
    ...mapActions({
      create: 'workOrder/create'
    }),
    async createOrder() {
      await this.create(this.order)
      console.log(this.order)
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

    open() {
      this.$vfm.show({
        component: Mileage,
        bind: {
          name: 'Mileage'
        }
      })
    },
    start() {
      this.isStart = !this.isStart
      this.startOrder(this.isStart)
      if (this.isStart) this.open()
    },
    close() {
      this.$confirm.require({
        title: 'Hey, wait!',
        message: `Are you sure, you want to close work order?`,
        acceptLabel: 'Close',
        rejectLabel: 'Cancel',
        icon: 'i-volume_up',
        accept: async () => {
          this.startOrder(false)
          this.$router.push('/work-orders/board')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
