<template>
  <div class="board__wrapper">
    <TheHeader @changeDay="changeDay" />
    <div v-if="day.type === 'Today' || day.type === 'Custom'" class="board__inner">
      <div class="board__header">
        <div class="board__title">
          Not Scheduled <span v-if="orders?.unscheduled" class="y-badge">{{ orders?.unscheduled.length }}</span>
        </div>
        <div class="board__title">
          To do <span v-if="orders?.todo" class="y-badge">{{ orders?.todo.length }}</span>
        </div>
        <div class="board__title">
          In Progress <span v-if="orders?.inProgress" class="y-badge">{{ orders?.inProgress.length }}</span>
        </div>
        <div class="board__title">
          Done <span v-if="orders?.done" class="y-badge">{{ orders?.done.length }}</span>
        </div>
      </div>
      <div class="board__body">
        <div class="board__col">
          <!-- <Card v-for="order of orders?.unscheduled" :key="order.uid" :order="order" /> -->
        </div>
        <div class="board__col">
          <Card v-for="order of orders?.todo" :key="order.uid" :order="order" />
        </div>
        <div class="board__col">
          <!-- <Card v-for="order of orders?.inProgress" :key="order.uid" :order="order" /> -->
        </div>
        <div class="board__col">
          <!-- <Card v-for="order of orders?.done" :key="order.uid" :order="order" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from './TheHeader'
import Card from './Card'
import {mapState, mapActions, mapMutations} from 'vuex'
import dayjs from 'dayjs'

export default {
  name: 'WorkOrderBoard',
  components: {Card, TheHeader},
  data() {
    return {
      dayjs,
      day: {type: 'Today'}
    }
  },
  async created() {
    await this.fetch()
  },
  computed: {
    ...mapState({
      orders: s => s.workOrder.workOrders
    })
  },
  methods: {
    ...mapActions({
      fetch: 'workOrder/fetchBoard',
      updateStatus: 'workOrder/updateStatus',
      scheduleOrder: 'workOrder/scheduleOrder',
      feetchStatuses: 'workOrder/status/fetch'
    }),
    changeDay(day) {
      this.day = day
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
