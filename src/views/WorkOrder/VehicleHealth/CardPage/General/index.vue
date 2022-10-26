<template>
  <div class="block__wrapper">
    <div class="block__body">
      <Tires v-if="card.name === 'Summer Tires' || card.name === 'Winter Tires'" />
      <div v-if="chooseServices.length" class="block__services services">
        <div class="block__header">
          <div class="block__title">Choosen Canned Service</div>
        </div>
        <Service v-for="service of chooseServices" :key="service.id" :service="service" />
      </div>

      <div v-if="services.length" class="block__services services">
        <div v-if="chooseServices.length" class="block__toggle" @click="isActive = !isActive">
          {{ isActive ? 'Hide' : 'View' }} all Canned Services
          <i class="i-keyboard_arrow_down" :style="[isActive ? {transform: 'rotateX(180deg)'} : {transform: 'rotateX(0)'}]" />
        </div>
      </div>
      <div v-if="(services.length && !chooseServices.length) || isActive" class="block__toggle-inner">
        <div v-if="services.length" class="block__header">
          <div class="block__title">Canned Services</div>
          <button class="block__btn" @click="open"><i class="i-add_circle" /><span>Create New Canned Service</span></button>
        </div>
        <Service v-for="service of services" :key="service.id" :service="service" />
      </div>

      <div v-if="history.length && $route.params.uid !== 'tech-start'" class="block__history history">
        <div class="block__header">
          <div class="block__title">Service History</div>
        </div>
        <History v-for="card of history" :key="card.id" :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import Service from './Service'
import History from './History'
import Tires from './Tires'
import CreateService from '@/views/InspectionBuilder/CardModal/Services/CreateService'
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
  name: 'CardPageGeneral',
  components: {Service, History, Tires},
  data() {
    return {
      isActive: false
    }
  },
  async created() {
    const cardID = this.card.id
    await this.fetchServices(cardID)
    await this.fetchHistory(cardID)
    if (this.$route.params.uid === 'tech-start') this.select(5)
  },
  computed: {
    ...mapState({
      activeService: s => s.company.cannedServices.activeService,
      allServices: s => s.company.cannedServices.services,
      history: s => s.company.cannedServices.history,
      card: s => s.company.cards.card
    }),
    chooseServices() {
      return this.allServices.filter(s => s.select)
    },
    services() {
      return this.allServices.filter(s => !s.select)
    }
  },
  watch: {
    async card(card) {
      await this.fetchServices(card.id)
      await this.fetchHistory(card.id)
    }
  },
  methods: {
    ...mapActions({
      fetchServices: 'company/cannedServices/fetch',
      fetchHistory: 'company/cannedServices/fetchHistory'
    }),
    ...mapMutations({
      select: 'company/cannedServices/select'
    }),
    open() {
      this.$vfm.show({
        component: CreateService,
        bind: {
          name: 'CreateService',
          'esc-to-close': true,
          'click-to-close': false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
