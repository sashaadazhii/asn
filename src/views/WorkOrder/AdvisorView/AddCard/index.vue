<template>
  <vue-final-modal v-slot="{close}" @before-open="beforeOpen">
    <div class="modal__wrapper">
      <div class="modal__header">
        <div class="modal__header-title">Cards Library</div>
        <Button label="Create New Card" icon="i-add_circle" size="small" />
        <Button icon="i-circle_close" border grey circle iconSize="20px" size="small" @click="close" />
      </div>
      <Input icon-left="i-search1" placeholder="Start typing to search card" />
      <div class="modal__block">
        <div class="modal__block-title">CANNED SERVICES</div>
        <div class="modal__block-inner">
          <Service viewOnly />
          <Service viewOnly />
          <Service viewOnly />
        </div>
        <div class="modal__block-title">CARDS</div>
        <div class="modal__block-inner">
          <Card v-for="card of cards" :key="card.templateID" :card="card" @click="openCard(card)" />
        </div>
      </div>
    </div>
  </vue-final-modal>
</template>

<script>
/* eslint-disable */
import Input from '@/components/Yaro/Input'
import Button from '@/components/Yaro/Button'
import Card from './Card'
import CardPage from './CardPage'
import Service from './CardPage/Service'

import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: 'AddCard',
  components: {Button, Input, Card, Service},
  data() {
    return {}
  },
  async created() {
    await this.fetchCards()
  },
  computed: {
    ...mapState({
      cards: s => s.company.cardTemplates.templates
    })
  },
  methods: {
    ...mapActions({
      fetchCards: 'company/cardTemplates/fetch'
    }),
    ...mapMutations({
      // selectAll: 'company/cards/selectAll',
    }),
    beforeOpen(e) {
      // this.part = e.ref.params._rawValue
    },
    openCard(card) {
      this.$vfm.show(
        {
          component: CardPage,
          bind: {
            name: 'CardPage',
            'click-to-close': false
          }
        },
        card
      )
      this.$vfm.hide('AddCard')
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
