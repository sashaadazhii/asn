<template>
  <vue-final-modal v-slot="{close}" @before-open="beforeOpen">
    <div class="modal__wrapper">
      <div class="modal__header">
        <div class="modal__header-top">
          <Button icon="i-arrow_back" border grey circle iconSize="20px" size="small" @click="back" />
          <Label :label="cardRelation" size="small" circle />
          <div class="modal__header-title">{{ card.name }}</div>
          <div class="modal__menu">
            <Menu :list="actionsList">
              <template #menu>
                <div class="modal__menu-label" :class="{'-green': cardAdded}">
                  <template v-if="cardAdded">
                    <i class="i-check_circle" />
                    <span>Added</span>
                  </template>
                  <template v-if="!cardAdded">
                    <i class="i-add_circle" />
                    <span>Add Card to</span>
                    <i class="i-keyboard_arrow_down" />
                  </template>
                </div>
              </template>
              <template #item="{item}">
                <div class="modal__menu-item">
                  <template v-if="item.label === 'only'">
                    <Label :label="item.label.toUpperCase()" size="small" border class="-grey" />
                    <span>this Customer’s Work Order</span>
                  </template>
                  <template v-if="item.label === 'all'">
                    <Label :label="item.label.toUpperCase()" size="small" />
                    <span
                      >Customers with <span>{{ order.vehicle.make }} {{ order.vehicle.model }} {{ order.vehicle.year }}</span></span
                    >
                  </template>
                </div>
              </template>
            </Menu>
          </div>
          <Button icon="i-circle_close" border grey circle iconSize="20px" size="small" @click="close" />
        </div>
        <div class="modal__header-bottom">
          <Button label="Canned Services" border :class="{'-white': block === 'service'}" @click="block = 'service'" />
          <Button label="General info" border :class="{'-white': block === 'info'}" @click="block = 'info'" />
        </div>
      </div>
      <div class="modal__main">
        <div v-if="block === 'service'" class="modal__services">
          <Button icon="i-add_circle" label="Create Canned Service" border @click="addService" />
          <Service />
          <Service />
        </div>
        <div v-if="block === 'info'" class="modal__info">
          <div class="modal__info-part">
            <div class="modal__info-block -service">
              <div class="info__title">Service Tracking</div>
              <Label icon="i-shutter_speed bluegreen" iconSize="16px" label="24 Months" border size="large" class="-border" />
              <Label icon="i-timer bluegreen" iconSize="16px" label="48,000 KM" border size="large" class="-border" />
            </div>
            <div class="modal__info-block -details">
              <div class="info__title">Card Details</div>
              <div class="info__block">
                <div class="info__row">
                  <div class="info__label">Last Updated:</div>
                  <div class="info__text"><i class="i-calendar" /><span>22 Feb 2022 at 12:20</span></div>
                </div>
                <div class="info__row">
                  <div class="info__label">Last Updated by:</div>
                  <div class="info__text"><Label alias="DM" size="mini" circle class="-dark" /> <span>Dave Martin</span></div>
                </div>
              </div>
              <div class="info__block">
                <div class="info__row">
                  <div class="info__label">Card Created:</div>
                  <div class="info__text"><i class="i-calendar" /><span>22 Feb 2022 at 12:20</span></div>
                </div>
                <div class="info__row">
                  <div class="info__label">Created by:</div>
                  <div class="info__text"><Label alias="DM" size="mini" circle class="-dark" /> <span>Dave Martin</span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal__info-part">
            <div class="modal__info-block -desc">
              <div class="info__title">Card Description</div>
              <div class="info__desc">
                Service includes a visual inspection of the brake system, replacement with new fluid that meets or exceeds your vehicle manufacturer’s
                specifications and proper disposal of the used fluid.
              </div>
            </div>
            <div class="modal__info-block -desc">
              <div class="info__title">Card Description <span>(for in-house use)</span></div>
              <div class="info__desc">
                Service includes a visual inspection of the brake system, replacement with new fluid that meets or exceeds your vehicle manufacturer’s
                specifications and proper disposal of the used fluid.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </vue-final-modal>
</template>

<script>
import Button from '@/components/Yaro/Button'
import Label from '@/components/Yaro/Label'
import Menu from '@/components/Yaro/Menu'
import AddCard from '../index.vue'
import AddService from './AddService'
import Service from './Service'

import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: 'CardPage',
  components: {Button, Label, Menu, Service},
  data() {
    return {
      card: {},
      cardAdded: false,
      block: 'service',
      actionsList: [
        {
          label: 'only',
          command: () => (this.cardAdded = true)
        },
        {
          label: 'all',
          command: () => (this.cardAdded = true)
        }
      ]
    }
  },
  async created() {
    // await this.fetchCards()
  },
  computed: {
    ...mapState({
      order: s => s.workOrder.workOrder,
      cards: s => s.company.cardTemplates.templates
    }),
    cardRelation() {
      if (this.card.templateID) {
        if (this.card.cardRelationType === 'global') return 'Global'
        const relations = this.card.relations.map(r => `${r.make} ${r.model} ${r.yearFrom}`)
        return relations.join(' ')
      }
      return ''
    }
  },
  methods: {
    ...mapActions({
      // fetchCards: 'company/cardTemplates/fetch'
    }),
    ...mapMutations({
      // selectAll: 'company/cards/selectAll',
    }),
    beforeOpen(e) {
      this.card = e.ref.params._rawValue
    },
    back() {
      this.$vfm.show({
        component: AddCard,
        bind: {
          name: 'AddCard',
          'click-to-close': false
        }
      })
      this.$vfm.hide('CardPage')
    },
    addService() {
      this.$vfm.show({
        component: AddService,
        bind: {
          name: 'AddService',
          'click-to-close': false
        }
      })
      // this.$vfm.hide('CardPage')
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
