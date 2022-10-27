<template>
  <vue-final-modal v-slot="{close}" @before-open="beforeOpen">
    <div class="modal__wrapper">
      <div class="modal__header">
        <div v-if="templateID" class="modal__title">Edit Canned Service</div>
        <div v-else class="modal__title">Add New Canned Service</div>
        <button class="modal__close" @click="close"><i class="i-circle_close" /></button>
      </div>
      <div class="modal__main">
        <y-input v-model.trim="name" title="Name" placeholder="Name" :error="v$.name.$error" />
        <label class="field__label">
          <div class="field__title">Description</div>
          <textarea class="field__text" placeholder="Description" v-model="description"></textarea>
        </label>
        <div class="field__label">
          <div class="field__title">Service Time</div>
          <div class="field__counter">
            <div class="field__counter-dec" :class="{disabled: hours <= 0.5}" @click="decTime">
              <i class="i-remove" />
            </div>
            <div>
              <input type="number" :value="hours" :min="0.5" step="0.5" @input="updateHours" @blur="updateHour" :style="{width: hoursWidth}" />
              <span>hr</span>
            </div>
            <div class="field__counter-inc" @click="incTime"><i class="i-add" /></div>
          </div>
        </div>
        <div class="field__select">
          <div class="field__title">Warranty</div>
          <Dropdown v-model="warranty" :options="warrantyList" @change="selectWarranty">
            <template #value="{value}">
              <div class="field__select-option">
                <i v-if="value.id === 'off'" class="i-remove_moderator red" />
                <i v-if="value.id === 'global'" class="i-shield green" />
                <i v-if="value.id === 'custom'" class="i-add_moderator blue" />
                <span>{{ value.label }}</span>
              </div>
            </template>
            <template #option="{option}">
              <div class="field__select-label">
                <i v-if="option.id === 'off'" class="i-remove_moderator red" />
                <i v-if="option.id === 'global'" class="i-shield green" />
                <i v-if="option.id === 'custom'" class="i-add_moderator blue" />
                <span>{{ option.label }}</span>
              </div>
            </template>
          </Dropdown>
        </div>
        <y-input
          v-if="warranty && warranty.id === 'custom'"
          v-maska="'########'"
          v-model.trim="range"
          ref="warrantyOdometr"
          title="Warranty Period"
          placeholder="Warranty Period"
          iconLeft="i-shutter_speed"
          iconColor="bluegreen"
          rightText="kilometers"
          :error="v$.range.$error"
        />
        <y-input
          v-if="warranty && warranty.id === 'custom'"
          v-maska="'####'"
          v-model.trim="time"
          title="Warranty Period"
          placeholder="Warranty Period"
          iconLeft="i-time"
          iconColor="orange"
          rightText="months"
          :error="v$.time.$error"
        />
      </div>
      <div class="modal__footer">
        <button class="modal__button" @click="Save"><span>Save</span><Loader :show="isLoading" /></button>
      </div>
    </div>
  </vue-final-modal>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Loader from '@/components/loader'
import Dropdown from '@/components/Yaro/Dropdown'
import useVuelidate from '@vuelidate/core'
import {required, requiredIf} from '@vuelidate/validators'

export default {
  name: 'AddNewCannedServiceModal',
  components: {Loader, Dropdown},
  data() {
    return {
      v$: useVuelidate(),
      name: null,
      description: null,
      hours: 0.5,
      hoursWidth: '30px',
      warranty: {id: 'off', label: 'Warranty Off'},
      warrantyList: [
        {id: 'off', label: 'Warranty Off'},
        {id: 'custom', label: 'Custom Warranty'}
      ],
      time: null,
      range: null,
      templateID: null,
      id: null,
      isLoading: false
    }
  },
  async created() {
    if (!this.company.id) await this.fetchCompanySettings()
    if (this.company.hasGlobalWarranty) {
      const {warrantyRange, warrantyTime} = this.company
      const globalWarranty = {
        id: 'global',
        label: `Global Warranty — ${warrantyRange.toLocaleString('fr-FR')} KM/ ${warrantyTime} years`
      }
      this.warrantyList.unshift(globalWarranty)
      this.warranty = globalWarranty
    }
  },
  computed: {
    ...mapState({
      company: s => s.company.settings.settings
    })
  },
  methods: {
    ...mapActions({
      create: 'company/cannedServices/create',
      update: 'company/cannedServices/update',
      fetchCompanySettings: 'company/settings/fetch'
    }),

    updateHours(e) {
      const hours = e.target.value
      this.hours = hours
      if (hours) this.hoursWidth = (hours.length + 1) * 7 + 'px'
    },
    updateHour(e) {
      const hours = e.target.value
      this.hours = Math.round(hours * 2) / 2
      this.hoursWidth = (this.hours.toString().length + 1) * 7 + 'px'
    },
    async selectWarranty(warranty) {
      if (warranty.value.id === 'custom') {
        await this.$nextTick()
        this.$refs.warrantyOdometr.$el.focus()
      }
    },
    decTime() {
      if (this.hours > 0.5) this.hours -= 0.5
      this.hoursWidth = (this.hours.toString().length + 1) * 7 + 'px'
    },
    incTime() {
      this.hours += 0.5
      this.hoursWidth = (this.hours.toString().length + 1) * 8 + 'px'
    },

    async Save() {
      if (this.isLoading) return
      const result = await this.v$.$validate()
      if (!result) return
      const id = +this.$route.params.id
      const {name, hours, warranty, time, range} = this
      const service = {name, hours, warrantyType: warranty.id}

      if (warranty.id === 'custom') {
        service.warranty = {}
        if (time) service.warranty.time = time
        if (range) service.warranty.range = range
      } else if (warranty.id === 'global') {
        const {warrantyRange, warrantyTime} = this.company
        service.warranty = {
          time: warrantyTime,
          range: warrantyRange
        }
      } else {
        service.warranty = {}
      }

      try {
        this.isLoading = true
        if (this.templateID) {
          service.templateID = this.templateID
          service.id = this.id
          await this.update({id: this.id, service, templateID: this.templateID})
          this.$vfm.hide('EditModal')
        } else {
          service.templateID = id
          service.id = this.$getID()
          await this.create({id, service})
          this.$vfm.hide('AddService')
        }
      } finally {
        this.isLoading = false
      }
    },
    beforeOpen(e) {
      const service = e.ref.params._rawValue
      if (service) {
        const {name, hours, warranty, templateID, id} = service
        this.templateID = templateID
        this.id = id
        this.name = name
        this.hours = hours
        if (typeof warranty === 'string') this.warranty = this.warrantyList.find(warr => warr.id === warranty)
        else {
          this.warranty = this.warrantyList.find(warr => warr.id === 'custom')
          this.time = warranty.time
          this.range = warranty.range
        }
      }
    }
  },
  validations() {
    return {
      name: {required},
      description: {},
      hours: {required},
      time: {requiredIf: requiredIf(() => this.warranty.id === 'custom' && !this.range)},
      range: {requiredIf: requiredIf(() => this.warranty.id === 'custom' && !this.time)}
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
