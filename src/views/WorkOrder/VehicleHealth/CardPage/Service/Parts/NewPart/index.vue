<template>
  <div class="part__wrapper">
    <div class="part__main">
      <i class="i-build" />
      <Input v-model="name" size="small" placeholder="Name" />
      <Input v-model="quantity" size="small" placeholder="Quantity" v-maska="'####'" />
      <Input v-model="price" size="small" placeholder="Price" v-maska="{mask: 'HHHHHHHH', tokens: {H: {pattern: /[0-9.]/}}}" />
      <span>${{ total }}</span>
    </div>
    <div class="part__footer">
      <Button label="Save" size="small" @click="addPart" />
      <Button label="Cancel" border size="small" @click="$emit('close')" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Yaro/Button'
import Input from '@/components/Yaro/Input'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'CardPageGeneralNewPart',
  components: {Input, Button},
  emits: ['close'],
  props: {
    part: {
      type: Object
    }
  },
  data() {
    return {
      name: null,
      // core: null,
      quantity: null,
      price: null
    }
  },
  computed: {
    ...mapState({
      service: s => s.company.cannedServices.activeService
    }),
    total() {
      return (this.quantity * this.price).toFixed(2)
    }
  },
  methods: {
    ...mapMutations({
      add: 'company/cannedServices/addPart'
    }),
    addPart() {
      const {name, price, quantity} = this
      const part = {
        serviceID: this.service.id,
        id: this.$getID(),
        name,
        quantity,
        price,
        select: false
      }
      this.add(part)
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
