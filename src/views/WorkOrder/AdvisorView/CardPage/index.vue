<template>
  <vue-final-modal v-slot="{close}" @before-open="beforeOpen">
    <div class="modal__wrapper">
      <div class="modal__header">
        <div class="modal__header-left">
          <div class="requests__row-title">Card Status:</div>
          <Menu :list="statusesChange" :disabled="!isStart">
            <template #menu>
              <Label :label="card.status" size="small" class="requests__label -hover" :class="labelClass(card.status)" />
            </template>
          </Menu>
          <div class="requests__row-title">Approval Status:</div>
          <Label
            :label="card.approvalStatus"
            size="small"
            icon="i-rp_done"
            circle
            class="requests__label -shadow"
            :class="labelClass(card.approvalStatus)"
            iconSize="8px"
          />
        </div>
        {{ order }}
        <div class="modal__header-right">
          <!-- <div class="tech__list">
            <div v-for="(tech, idx) of card.techs" :key="idx" class="tech__label">{{ tech.firstName[0] }}{{ tech.lastName[0] }}</div>
            <Multiselect v-model="card.techs" :options="techList" dataKey="id" :showCheckbox="false">
              <template #menu>
                <div class="tech__add"><i class="i-add" /></div>
              </template>
              <template #option="{option}">
                <div class="y-dropdown-item-custom">
                  <i v-if="card.techs.some(t => t.id === option.id)" class="i-check_circle1" />
                  <Label :alias="`${option.firstName[0]}${option.lastName[0]}`" circle size="mini" />
                  <span>{{ option.firstName }} {{ option.lastName }}</span>
                </div>
              </template>
            </Multiselect>
          </div> -->

          <div class="modal__header-nav">
            <Button icon="i-keyboard_arrow_down" class="-grey" border iconSize="20px" @click="changeCard('dec')" />
            <Button icon="i-keyboard_arrow_up" class="-grey" border iconSize="20px" @click="changeCard('inc')" />
          </div>
          <Button icon="i-circle_close" border circle iconSize="20px" size="small" @click="close" />
        </div>
      </div>
    </div>
  </vue-final-modal>
</template>

<script>
import Button from '@/components/Yaro/Button'
import Label from '@/components/Yaro/Label'

import Menu from '@/components/Yaro/Menu'
import Dropdown from '@/components/Yaro/Dropdown'

import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: 'CardPage',
  components: {Button, Label},
  data() {
    return {
      block: 'General',
      techs: null,
      statusesChange: [
        {label: 'No Status', command: () => this.changeStatus({id: this.card.id, status: 'No Status'})},
        {label: 'Good', command: () => this.changeStatus({id: this.card.id, status: 'Good'})},
        {label: 'Recommended', command: () => this.changeStatus({id: this.card.id, status: 'Recommended'})},
        {label: 'Component Unsafe', command: () => this.changeStatus({id: this.card.id, status: 'Component Unsafe'})}
      ],
      approvalStatusChange: [
        {label: 'No Status', command: () => this.changeApprovalStatus({id: this.card.id, approvalStatus: 'No Status'})},
        {label: 'Approved By Customer', command: () => this.changeApprovalStatus({id: this.card.id, approvalStatus: 'Approved By Customer'})},
        {label: 'Approved By SA', command: () => this.changeApprovalStatus({id: this.card.id, approvalStatus: 'Approved By SA'})},
        {label: 'Temporary Declined', command: () => this.changeApprovalStatus({id: this.card.id, approvalStatus: 'Temporary Declined'})},
        {label: 'Permanently Declined', command: () => this.changeApprovalStatus({id: this.card.id, approvalStatus: 'Permanently Declined'})},
        {label: 'Approved For Next Visit', command: () => this.changeApprovalStatus({id: this.card.id, approvalStatus: 'Approved For Next Visit'})}
      ],
      request: {},
      notes: 'The cabin air filter in a vehicle helps remove harmful pollutants, including pollen and dust, from the air you breathe within the car.',
      brakePads: ['5mm', '5.5mm', '6mm', '6.5mm', '7mm', '7.5mm'],
      brakePadLeft: '5mm',
      brakePadLRight: '5mm',
      uid: null
    }
  },
  async created() {
    // const uid = this.$route.params.uid
    // if (uid === 'tech-start') this.request = await this.findRequest(1)
    // if (this.note) {
    //   this.notes = this.note.text
    // }
  },
  computed: {
    ...mapState({
      techList: s => s.company.users.users.filter(u => u.role === 'technician'),
      card: s => s.company.cards.card,
      cards: s => s.company.cards.cards,
      isStart: s => s.workOrder.isStart,
      activeService: s => s.company.cannedServices.activeService,
      order: s => s.workOrder.workOrder
    }),
    quotes() {
      return this.order.quotes
    }
  },
  watch: {
    activeService(s) {
      if (s.id) this.block = 'Service'
      else this.block = 'General'
    }
  },
  methods: {
    ...mapActions({
      findRequest: 'requests/find',
      findOrder: 'workOrder/find'
    }),
    ...mapMutations({
      setCard: 'company/cards/changeCard',
      changeStatus: 'company/cards/changeStatus',
      changeApprovalStatus: 'company/cards/changeApprovalStatus',
      setActiveService: 'company/cannedServices/setActiveService'
    }),
    async beforeOpen(e) {
      this.uid = e.ref.params_rawValue
      // this.uid = this.$route.params.uid
      await this.findOrder(this.uid)
    },
    labelClass(status) {
      return {
        '-orange': status === 'Recommended',
        '-red': status === 'Component Unsafe' || status === 'Permanently Declined',
        '-bluegreen': status === 'Canned Service Completed' || status === 'Temporary Declined',
        '-none': status === 'No Status',
        '-green': status === 'Approved By SA',
        '-green -border': status === 'Approved By Customer',
        '-purple': status === 'Approved For Next Visit',
        '-disabled': !this.isStart
      }
    },
    changeCard(param) {
      this.setCard(param)
      this.setActiveService({})
      this.block = 'General'
    }
  },
  beforeUnmount() {
    this.setActiveService({})
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
