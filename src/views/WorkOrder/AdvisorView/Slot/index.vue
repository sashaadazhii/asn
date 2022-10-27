<template>
  <div class="card__wrapper">
    <div class="card__menu">
      <Menu :list="statusesChange" position="left">
        <template #menu>
          <Label :label="card.status" size="small" class="card__label -hover" :class="labelClass(card.status)" />
        </template>
      </Menu>
    </div>
    <div class="card__title">
      <i v-if="card.isRequest" class="i-device_hub" />
      {{ card.name }}
    </div>
    <div class="card__menu">
      <div class="card__status" @click="$emit('changeStatus', card)" :class="card.advisorApprove ? 'green' : ''">
        <i class="i-check_circle_outline" /> {{ card.advisorApprove ? 'Ready for Customer' : 'Mark as Ready for Customer' }}
      </div>
    </div>
    <div class="card__menu">
      <Label :label="card.approvalStatus" size="small" circle class="card__label -shadow -hover" :class="labelClass(card.approvalStatus)" />
    </div>
    <div class="card__progress">
      <div class="card__progress-title">{{ card.service }}%</div>
      <div class="card__progress-bar">
        <span :style="{width: card.service + '%'}" :class="{'-orange': card.service >= 60 && card.service < 89, '-red': card.service > 90}" />
      </div>
      <div class="card__progress-title">{{ card.odometerTrack.toLocaleString('fr-FR') }} KM / {{ card.timeTrackLength }} Month</div>
    </div>
    <Menu v-if="isStart" :list="actionsList">
      <!-- <template #menu>
        <Label
          :label="card.approvalStatus"
          size="small"
          icon="i-rp_done"
          circle
          class="card__label -shadow -hover"
          :class="labelClass(card.approvalStatus)"
          iconSize="8px"
        />
      </template> -->
    </Menu>
  </div>
</template>

<script>
import Menu from '@/components/Yaro/Menu'
import Label from '@/components/Yaro/Label'
import {mapMutations, mapState} from 'vuex'
export default {
  name: 'CardSlot',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  components: {Label, Menu},
  data() {
    return {
      actionsList: [
        {
          label: 'Un-Relate Card from Single Vehicle',
          id: 0,
          command: () => {
            this.openModal('Un-Relate Card from Single Vehicle')
          }
        },
        {
          label: 'Un-Relate Card from Entire Model Year',
          command: () => this.openModal('Un-Relate Card from Entire Model Year')
        }
      ],
      statusesChange: [
        {label: 'No Status', command: () => this.changeStatus({id: this.card.id, status: 'No Status'})},
        {label: 'Good', command: () => this.changeStatus({id: this.card.id, status: 'Good'})},
        {label: 'Recommended', command: () => this.changeStatus({id: this.card.id, status: 'Recommended'})},
        {label: 'Component Unsafe', command: () => this.changeStatus({id: this.card.id, status: 'Component Unsafe'})}
      ],
      approvalStatusesChange: [
        {label: 'No Status', command: () => this.changeApprovalStatus({id: this.card.id, approvalStatus: 'No Status'})},
        {label: 'Approved By Customer', command: () => this.changeApprovalStatus({id: this.card.id, approvalStatus: 'Approved By Customer'})},
        {label: 'Approved By SA', command: () => this.changeApprovalStatus({id: this.card.id, approvalStatus: 'Approved By SA'})},
        {label: 'Temporary Declined', command: () => this.changeApprovalStatus({id: this.card.id, approvalStatus: 'Temporary Declined'})},
        {label: 'Permanently Declined', command: () => this.changeApprovalStatus({id: this.card.id, approvalStatus: 'Permanently Declined'})},
        {label: 'Approved For Next Visit', command: () => this.changeApprovalStatus({id: this.card.id, approvalStatus: 'Approved For Next Visit'})}
      ]
    }
  },

  computed: {
    ...mapState({
      isStart: s => s.workOrder.isStart,
      requests: s => s.requests.requests
    }),
    isChecked() {
      return this.requests.filter(r => r.status === 'Not Processed').length === 0 ? true : false
    }
  },
  methods: {
    ...mapMutations({
      select: 'company/cards/select',
      changeStatus: 'company/cards/changeStatus',
      changeApprovalStatus: 'company/cards/changeApprovalStatus',
      remove: 'company/cards/remove'
    }),
    changeStatus(card) {},
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
    openModal(message) {
      this.$confirm.require({
        title: 'Hey, wait!',
        message: `Are you sure, you want to ${message} ?`,
        acceptLabel: 'Yes',
        rejectLabel: 'No',
        icon: 'i-volume_up',
        accept: () => {
          this.remove(this.card.id)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
