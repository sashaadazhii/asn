<template>
  <div class="service__wrapper" :class="{'-view': viewOnly}">
    <div class="service__header">
      <i class="i-keyboard_arrow_down" :class="{'-revert': show}" @click="show = !show" />
      <span>Replace left</span>
      <Label label="3" border circle size="large" class="-grey -counter" />
      <Label label="1.4hr" icon="i-time" iconColor="#3EB3BB" iconSize="18px" border size="large" class="-grey" />
      <Label label="1.4hr" icon="i-time orange" iconSize="18px" border size="large" class="-grey" />
      <Label label="12 times" border size="large" class="-grey -counter" />
      <Label v-if="!viewOnly" label="24 months /  3000 km" icon="i-shield green" iconSize="18px" border size="large" class="-grey" />
      <Menu v-if="!viewOnly" :list="actionsList">
        <template #menu>
          <Button icon="i-more_horiz" border size="small" />
        </template>
      </Menu>
      <div v-if="viewOnly" class="service__type">
        <Label label="Tesla Model S 2020" circle size="mini" class="-grey -counter" />
        Brakes Back
      </div>
    </div>
    <template v-if="show">
      <div class="service__desc">
        <div class="service__desc-title">SERVICE Description</div>
        <div class="service__desc-text">
          Weird noise is at the back of the vehicle. It seems like some parts are not being connected. Firts time happened a week ago, then disappeared and now
          is there again.
        </div>
      </div>
      <div class="service__parts">
        <div class="service__parts-header">
          <Button icon="i-build" label="Add New Part" border class="-grey" />
        </div>
        <div class="service__parts-list">
          <div class="service__parts-item">
            <i class="i-build" />
            <span>597-205 5w20 Full Synthetic Oil</span>
            <span>$52.25</span>
          </div>
          <div class="service__parts-item">
            <i class="i-build" />
            <span>597-205 5w20 Full Synthetic Oil</span>
            <span>$52.25</span>
          </div>
          <div class="service__parts-item">
            <i class="i-build" />
            <span>597-205 5w20 Full Synthetic Oil</span>
            <span>$52.25</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Label from '@/components/Yaro/Label'
import Menu from '@/components/Yaro/Menu'
import Button from '@/components/Yaro/Button'

import {mapState, mapMutations} from 'vuex'
export default {
  name: 'Service',
  components: {Label, Menu, Button},
  props: {
    viewOnly: {
      type: Boolean,
      default: false
    }
    // service: {
    //   type: Object,
    //   required: true
    // }
  },
  data() {
    return {
      show: false,
      actionsList: [
        {
          label: 'Edit',
          icon: 'i-edit',
          command: () => {
            // this.setVehicle(this.vehicle)
            // this.$router.push(`/customers/${this.vehicle.customerUID}/vehicles/${this.vehicle.uid}/edit`)
          }
        }
      ]
    }
  },
  created() {},
  computed: {
    ...mapState({
    })
    // cardRelation() {
    //   if (this.card.cardRelationType === 'global') return 'Global'
    //   const relations = this.card.relations.map(r => `${r.make} ${r.model} ${r.yearFrom}`)
    //   return relations.join(' ')
    // },
    // cardWarranty() {
    //   const {odometerTrack, timeTrackLength} = this.card
    //   return `${odometerTrack.toLocaleString('fr-FR')} KM / ${timeTrackLength.toLocaleString('fr-FR')} Months`
    // }
  },
  methods: {
    ...mapMutations({
      // selectAll: 'company/cards/selectAll',
    })
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
