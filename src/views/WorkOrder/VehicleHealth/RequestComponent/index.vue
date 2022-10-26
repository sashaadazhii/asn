<template>
  <div class="request__wrapper" @click="open">
    <div class="request__header">
      <Label :label="request.status" size="small" class="request__label" :class="labelClass(request.status)" />

      <div class="tech__list">
        <Label v-for="tech of request.techs" :key="tech.id" :alias="`${tech.firstName[0]}${tech.lastName[0]}`" circle class="tech__label" size="small" />
      </div>
    </div>
    <div class="request__main">
      <i class="i-device_hub request__main-icon" />
      <div class="request__main-title">Customer Request</div>
      <div class="request__main-text">{{ request.notes }}</div>
    </div>
    <!-- <div class="request__footer">
      <div class="request__footer-desc">
        <div class="request__footer-time">
          <i class="i-time" />
          <span>Est:</span>
          <span>{{ request.estimatedTime }}</span>
        </div>
        <div class="request__footer-time">
          <span>Tracked:</span>
          <span>{{ request.trackedTime }}</span>
        </div>
      </div>
      <div class="request__footer-progress">
        <span class="fill" />
        <span class="fill" />
        <span class="fill" />
        <span />
        <span />
      </div>
    </div> -->
  </div>
</template>

<script>
import Label from '@/components/Yaro/Label'
import RequestModal from './RequestModal'
import {mapMutations} from 'vuex'

export default {
  name: 'VehicleRequest',
  components: {Label},
  props: {
    request: {
      type: Object,
      required: true
    }
  },
  methods: {
    labelClass(status) {
      return {
        '-grey': status === 'Not Processed',
        '-red': status === 'Unable to reproduce',
        '-green': status === 'Done'
      }
    },
    ...mapMutations({
      set: 'requests/setRequest'
    }),
    open() {
      this.set(this.request)
      this.$vfm.show({
        component: RequestModal,
        bind: {
          name: 'Request',
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
