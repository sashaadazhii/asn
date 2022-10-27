<template>
  <div class="card__wrapper">
    <div class="card__icon">
      <i class="i-add_circle" />
    </div>
    <Label :label="cardRelation" size="small" circle class="card__Label -grey" />
    <div class="card__name">{{ card.name }}</div>
    <Label :label="cardWarranty" size="small" class="card__Label -border" />
  </div>
</template>

<script>
import Label from '@/components/Yaro/Label'

import {mapState, mapMutations} from 'vuex'
export default {
  name: 'Card',
  components: {Label},
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  created() {},
  computed: {
    ...mapState({}),
    cardRelation() {
      if (this.card.cardRelationType === 'global') return 'Global'
      const {make, model, yearFrom, yearTo} = this.card.relation
      const relation = `${make} ${model} ${yearFrom} ${yearFrom === yearTo ? '' : '- ' +  yearTo}`
      return relation
    },
    cardWarranty() {
      const {odometerTrack, timeTrackLength} = this.card
      return `${odometerTrack.toLocaleString('fr-FR')} KM / ${timeTrackLength.toLocaleString('fr-FR')} Months`
    }
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
