<template>
  <div class="block__wrapper">
    <div class="block__header">
      <div class="block__back" @click="back"><i class="i-arrow_back" /></div>
      <div class="block__title">Replace Left</div>
      <button class="block__btn"><i class="i-add_circle" /><span>Add New part</span></button>
    </div>
    <div class="block__body">
      <div class="block__subheader">
        <span></span>
        <span>Part Description</span>
        <span>Core</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Total</span>
      </div>
      <div class="block__parts">
        <Part v-for="(part, idx) of parts" :key="idx" :part="part" @select="select" />
      </div>
    </div>
    <Dialog v-model:visible="display" :dismissableMask="false" position="bottom" :closeOnEsc="false" :modal="false" draggable class="dialog__wrapper">
      <template v-slot="{initDrag}">
        <div class="dialog__inner">
          <div class="dialog__move" @mousedown="initDrag" @touchstart="initDrag"><i class="i-open_with" /></div>
          <div class="y-chip">{{ selectedParts.length }}</div>
          <div class="dialog__text">Parts Selected:</div>
          <div class="dialog__title">Change Card Status to</div>
          <Dropdown v-model="type" :options="types" size="medium" class="health__header-dropdown" theme="grey">
            <template #value="{value}">
              <div class="y-dropdown-item-custom --theme-grey">
                <i class="i-layers bluegreen" />
                <span>{{ value }} </span>
              </div>
            </template>
            <template #option="{option}">
              <div class="y-dropdown-label-custom --theme-grey">
                <i class="i-layers bluegreen" />
                <span>{{ option }}</span>
              </div>
            </template>
          </Dropdown>
          <div class="dialog__btns">
            <button class="dialog__btn" @click="save">Apply changes</button>
            <button class="dialog__btn dialog__btn--border" @click="close">Close</button>
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Part from './Part'
import {mapState, mapActions, mapMutations} from 'vuex'
import Dialog from '@/components/Yaro/Dialog'
import Dropdown from '@/components/Yaro/Dropdown'

export default {
  name: 'CardPageGeneralParts',
  components: {Part, Dialog, Dropdown},
  data() {
    return {
      display: false,
      types: ['Warranty Claim', 'In-house', 'Manufacturers'],
      type: 'Warranty Claim'
    }
  },
  async created() {},
  computed: {
    ...mapState({
      service: s => s.company.cannedServices.activeService
    }),
    parts() {
      return this.service.parts
    },
    selectedParts() {
      return this.parts.filter(p => p.select)
    }
  },
  watch: {
    parts: {
      handler(parts) {
        if (!parts) return
        if (parts.some(p => p.select)) this.display = true
        else this.display = false
      },
      deep: true
    }
  },
  methods: {
    ...mapActions({
      fetch: 'company/parts/fetch'
    }),
    ...mapMutations({
      setActiveService: 'company/cannedServices/setActiveService'
    }),
    select(id) {
      if (!id) {
        this.parts.forEach(p => (p.select = false))
        return
      }
      const part = this.parts.find(p => p.id === id)
      part.select = !part.select
    },
    change(type) {
      this.parts.forEach(p => (p.type = type))
    },
    back() {
      this.setActiveService({})
    },
    save() {
      this.change(this.type)
      this.close()
      this.type = 'Warranty Claim'
    },
    close() {
      this.display = false
      this.select()
      this.type = 'Warranty Claim'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
