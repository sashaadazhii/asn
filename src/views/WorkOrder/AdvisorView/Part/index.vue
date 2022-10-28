<template>
  <div class="part__wrapper" :class="{'-select': part.select}">
    <div class="part__left">
      <div class="part__title">
        <i class="i-build" /> <span> # {{ part.name }}</span>
      </div>
      <div class="part__subtitle">{{ part.description }}</div>
    </div>
    <div class="part__right">
      <input v-model="quantity" type="text" class="part__input" v-maska="'####'" />
      <input v-model="price" type="text" class="part__input" v-maska="{mask: 'HHHHHHHH', tokens: {H: {pattern: /[0-9.]/}}}" />
      <div class="part__title">{{ formatter(total) }}</div>
      <Menu :list="actionsList">
        <template #menu @click.stop>
          <Button icon="i-more_horiz" border size="small" />
        </template>
      </Menu>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Yaro/Menu'
import Button from '@/components/Yaro/Button'
import {mapState} from 'vuex'

export default {
  name: 'CardPageGeneralPart',
  components: {Menu, Button},
  emits: {select: null},
  props: {
    part: {
      type: Object,
      required: true
    }
  },
  created() {
    const {price, core, quantity} = this.part
    this.price = price
    this.core = core
    this.quantity = quantity
    this.serviceName = this.service.name
  },
  data() {
    return {
      core: 0,
      quantity: 0,
      price: 0,
      serviceName: null,
      actionsList: [
        {
          label: 'Edit',
          icon: 'i-edit'
        }
      ]
    }
  },
  computed: {
    total() {
      return this.quantity * this.price
    },
    ...mapState({
      service: s => s.company.cannedServices.activeService
    })
  },
  methods: {
    formatter(val) {
      const price = new Intl.NumberFormat('en-CA', {style: 'currency', currency: 'CAD'}).format(val)
      return price
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
