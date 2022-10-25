<template>
  <div class="service__wrapper" :class="{active: service.select}" @click="open">
    <div class="y-radio" :class="{active: service.select}" @click.stop="chose" />
    <span>{{ service.name }}</span>
    <Label :label="service.parts.length" circle class="-grey -counter" color="#fff" />
    <Label
      :label="`${service.estimatedTime} hr`"
      icon="i-time"
      iconColor="#3EB3BB"
      iconSize="18px"
      size="large"
      class="-grey"
      color="#fff"
      v-tooltip.bottom="'Estimated time'"
    />
    <Label
      :label="`${service.averageTime} hr`"
      icon="i-time orange"
      iconSize="18px"
      border
      size="large"
      class="-grey"
      color="#fff"
      v-tooltip.bottom="'Average time'"
    />
    <Label :label="`${service.used} times`" size="large" class="-grey -counter" color="#fff" v-tooltip.bottom="'Number of times used'" />
    <!-- <Label
      :label="`${service.warranty?.time || 0} Months /  ${service.warranty?.range.toLocaleString('fr-FR') || 0} KM`"
      :icon="labelIcon"
      iconSize="18px"
      border
      size="large"
      class="-grey"
      color="#fff"
      v-tooltip.bottom="'Warranty'"
    /> -->
    <div @click.stop>
      <Menu :list="actionsList">
        <template #menu @click.stop>
          <Button icon="i-more_horiz" border size="small" />
        </template>
      </Menu>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Yaro/Button'
import Tooltip from '@/components/Yaro/tooltip'
import Label from '@/components/Yaro/Label'
import Menu from '@/components/Yaro/Menu'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'Service',
  components: {Button, Label, Menu},
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      actionsList: [
        {
          label: 'Edit',
          icon: 'i-edit'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      activeService: s => s.company.cannedServices.activeService
    }),
    labelIcon() {
      switch (this.service?.warrantyType) {
        case 'global':
          return 'i-shield green'
        case 'off':
          return 'i-remove_moderator red'
        case 'custom':
          return 'i-add_moderator blue'
        default:
          return ''
      }
    }
  },
  methods: {
    ...mapMutations({
      set: 'company/cannedServices/setActiveService',
      select: 'company/cannedServices/select'
    }),
    open() {
      this.set(this.service)
    },
    chose() {
      const serviceID = this.service.id
      this.select(serviceID)
    }
  },
  directives: {
    tooltip: Tooltip
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
