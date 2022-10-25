<template>
  <div class="services">
    <div class="services__wrapper">
      <div class="servises__overflow">
        <div class="services__block">
          <div class="services__title">Main</div>
          <div class="services__row">
            <div class="services__col">
              <i class="i-car_rental" :class="{active: settings.loanVehicles}"></i>
              <div class="services__name">Vehicle in return</div>
            </div>
            <div class="services__toggle-wrap">
              <Switch v-model="settings.loanVehicles" @click="updateLoanVehicles" />
            </div>
          </div>
          <div class="services__row">
            <div class="services__col">
              <i class="i-local_taxi" :class="{active: settings.rideToWork}"></i>
              <div class="services__name">Ride to work</div>
            </div>
            <div class="services__toggle-wrap">
              <Switch v-model="settings.rideToWork" @click="updateRideToWork" />
            </div>
          </div>
        </div>
        <div class="services__block">
          <div class="services__title">Additional</div>
          <div class="services__row">
            <div class="services__col">
              <i class="i-archive" :class="{active: settings.partsBins}"></i>
              <div class="services__name">Parts Bins</div>
            </div>
            <div class="services__toggle-wrap">
              <Switch v-model="settings.partsBins" @click="updatePartsBins" />
            </div>
          </div>
          <div class="services__row">
            <div class="services__col">
              <i class="i-video_call" :class="{active: settings.initialWalkThrough}"></i>
              <div class="services__name">Initial Walk Through</div>
            </div>
            <div class="services__toggle-wrap">
              <Switch v-model="settings.initialWalkThrough" @click="updateWalkThrough" />
            </div>
          </div>

          <div class="services__row">
            <div class="services__col">
              <i class="i-autorenew" :class="{active: settings.winterTires}"></i>
              <div class="services__name">Winter Tires Card</div>
            </div>
            <div class="services__toggle-wrap">
              <Switch v-model="settings.winterTires" @click="updateWinterTires" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations, mapState} from 'vuex'
import _ from 'lodash'
import Switch from '@/components/Yaro/Switch'
export default {
  name: 'CompanySettingsServices',
  components: {Switch},
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapState({
      settings: s => s.company.settings.settings
    })
  },

  methods: {
    ...mapMutations({
      update: 'company/settings/update'
    }),
    async updateLoanVehicles() {
      if (this.isLoading) return
      this.settings.loanVehicles = !this.settings.loanVehicles
      const {
        slug,
        isActive,
        businessName,
        mainAddress,
        businessPhoneNumber,
        ownerName,
        ownerEmail,
        ownerPhone,
        mainContactName,
        mainContactEmail,
        mainContactPhone,
        hasGlobalWarranty,
        loanVehicles,
        rideToWork,
        usersQuota,
        usersCount,
        timeZoneName,
        partsBins,
        winterTires,

        hourlyRate,
        initialWalkThrough
      } = this.settings

      const settings = {
        slug,
        isActive,
        businessName,
        mainAddress,
        businessPhoneNumber,
        ownerName,
        ownerEmail,
        ownerPhone,
        mainContactName,
        mainContactEmail,
        mainContactPhone,
        hasGlobalWarranty,
        loanVehicles,
        rideToWork,
        usersQuota,
        usersCount,
        timeZoneName,
        partsBins,
        winterTires,

        hourlyRate,
        initialWalkThrough
      }
      try {
        this.update(settings)
      } finally {
        this.isLoading = false
      }
    },
    async updateRideToWork() {
      if (this.isLoading) return
      this.settings.rideToWork = !this.settings.rideToWork

      const {
        slug,
        isActive,
        businessName,
        mainAddress,
        businessPhoneNumber,
        ownerName,
        ownerEmail,
        ownerPhone,
        mainContactName,
        mainContactEmail,
        mainContactPhone,
        hasGlobalWarranty,
        loanVehicles,
        rideToWork,
        usersQuota,
        usersCount,
        timeZoneName,
        partsBins,
        winterTires,

        hourlyRate,
        initialWalkThrough
      } = this.settings

      const settings = {
        slug,
        isActive,
        businessName,
        mainAddress,
        businessPhoneNumber,
        ownerName,
        ownerEmail,
        ownerPhone,
        mainContactName,
        mainContactEmail,
        mainContactPhone,
        hasGlobalWarranty,
        loanVehicles,
        rideToWork,
        usersQuota,
        usersCount,
        timeZoneName,
        partsBins,
        winterTires,

        hourlyRate,
        initialWalkThrough
      }
      try {
        this.isLoading = true
        this.update(settings)
      } finally {
        this.isLoading = false
      }
    },
    async updateWalkThrough() {
      if (this.isLoading) return
      this.settings.initialWalkThrough = !this.settings.initialWalkThrough

      const {
        slug,
        isActive,
        businessName,
        mainAddress,
        businessPhoneNumber,
        ownerName,
        ownerEmail,
        ownerPhone,
        mainContactName,
        mainContactEmail,
        mainContactPhone,
        hasGlobalWarranty,
        loanVehicles,
        rideToWork,
        usersQuota,
        usersCount,
        timeZoneName,
        partsBins,
        winterTires,

        hourlyRate,
        initialWalkThrough
      } = this.settings

      const settings = {
        slug,
        isActive,
        businessName,
        mainAddress,
        businessPhoneNumber,
        ownerName,
        ownerEmail,
        ownerPhone,
        mainContactName,
        mainContactEmail,
        mainContactPhone,
        hasGlobalWarranty,
        loanVehicles,
        rideToWork,
        usersQuota,
        usersCount,
        timeZoneName,
        partsBins,
        winterTires,

        hourlyRate,
        initialWalkThrough
      }
      try {
        this.isLoading = true
        this.update(settings)
      } finally {
        this.isLoading = false
      }
    },
    async updatePartsBins() {
      if (this.isLoading) return
      this.settings.partsBins = !this.settings.partsBins

      const {
        slug,
        isActive,
        businessName,
        mainAddress,
        businessPhoneNumber,
        ownerName,
        ownerEmail,
        ownerPhone,
        mainContactName,
        mainContactEmail,
        mainContactPhone,
        hasGlobalWarranty,
        loanVehicles,
        rideToWork,
        usersQuota,
        usersCount,
        timeZoneName,
        partsBins,
        winterTires,

        hourlyRate,
        initialWalkThrough
      } = this.settings

      const settings = {
        slug,
        isActive,
        businessName,
        mainAddress,
        businessPhoneNumber,
        ownerName,
        ownerEmail,
        ownerPhone,
        mainContactName,
        mainContactEmail,
        mainContactPhone,
        hasGlobalWarranty,
        loanVehicles,
        rideToWork,
        usersQuota,
        usersCount,
        timeZoneName,
        partsBins,
        winterTires,
        hourlyRate,
        initialWalkThrough
      }
      try {
        this.isLoading = true
        this.update(settings)
      } finally {
        this.isLoading = false
      }
    },
    async updateWinterTires() {
      if (this.isLoading) return
      this.settings.winterTires = !this.settings.winterTires

      const {
        slug,
        isActive,
        businessName,
        mainAddress,
        businessPhoneNumber,
        ownerName,
        ownerEmail,
        ownerPhone,
        mainContactName,
        mainContactEmail,
        mainContactPhone,
        hasGlobalWarranty,
        loanVehicles,
        rideToWork,
        usersQuota,
        usersCount,
        timeZoneName,
        partsBins,
        winterTires,

        hourlyRate,
        initialWalkThrough
      } = this.settings

      const settings = {
        slug,
        isActive,
        businessName,
        mainAddress,
        businessPhoneNumber,
        ownerName,
        ownerEmail,
        ownerPhone,
        mainContactName,
        mainContactEmail,
        mainContactPhone,
        hasGlobalWarranty,
        loanVehicles,
        rideToWork,
        usersQuota,
        usersCount,
        timeZoneName,
        partsBins,
        winterTires,

        hourlyRate,
        initialWalkThrough
      }
      try {
        this.isLoading = true
        this.update(settings)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
