<template>
  <div class="page-inner">
    <div class="health__wrapper">
      <div class="health__header">
        <Input :modelValue="searchValue" size="medium" icon-left="i-search1" placeholder="Start typing to search card" @input="changeSearch" />
        <Button label="Add Card from Library" icon="i-add_circle" @click="addCard" />
      </div>
      <div class="health__table table">
        <div class="table__header">
          <div class="table__header-cell">Card status</div>
          <div class="table__header-cell">Card name</div>
          <div class="table__header-cell">Approval Status</div>
          <div class="table__header-cell">Service Tracking</div>
        </div>
        <div class="table__main">
          <Slot v-for="card of actualCards" :key="card.uid" :card="card" @click.self="openCard(card)" @changeStatus="changeStatus(card)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
import Dropdown from '@/components/Yaro/Dropdown'
import Button from '@/components/Yaro/Button'
import Input from '@/components/Yaro/Input'
import Filter from '@/components/Yaro/Filter'
import Label from '@/components/Yaro/Label'
import Slot from './Slot'
import AddCard from './AddCard'
import CardPage from './CardPage'

export default {
  name: 'SAView',
  components: {Button, Input, Slot},

  data() {
    return {}
  },
  async created() {
    await this.fetch()
  },
  computed: {
    ...mapState({
      order: s => s.workOrder.workOrder,
      cards: s => s.company.cards.cards,
      card: s => s.company.cards.card,
      searchValue: s => s.company.cards.searchValue,
      isStart: s => s.workOrder.isStart
    }),
    actualCards() {
      return this.cards.filter(c => c.status !== 'Good')
    }
  },
  methods: {
    ...mapActions({
      fetch: 'company/cards/fetch'
    }),
    ...mapMutations({
      setSearch: 'company/cards/setSearch',
      setCard: 'company/cards/setCard'
    }),
    changeSearch(searchValue) {
      this.setSearch(searchValue)
      this.fetch()
    },
    addCard() {
      if (!this.isStart) return
      this.$vfm.show({
        component: AddCard,
        bind: {
          name: 'AddCard',
          'click-to-close': false
        }
      })
    },
    openCard(card) {
      this.setCard(card)

      this.$vfm.show(
        {
          component: CardPage,
          bind: {
            name: 'CardPage',
            'click-to-close': false,
            'esc-to-close': true
          }
        },
        card.uid
      )
    },
    changeStatus(card) {
      card.advisorApprove = !card.advisorApprove
    },
    labelColor() {
      const status = this.card.status
      switch (status) {
        case 'Component Unsafe':
          return '#F37878'
        case 'Recommended':
          return ' #FFA14E'
        case 'Done':
          return '#10B981'
        default:
          return '#6b7280'
      }
    },
    formatter(val) {
      const price = new Intl.NumberFormat('en-CA', {style: 'currency', currency: 'CAD'}).format(val)
      return price
    }
  }
}
</script>
<style scoped lang="scss">
@import 'style';
</style>
