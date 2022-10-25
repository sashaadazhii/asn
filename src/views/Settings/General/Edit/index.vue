<template>
  <div class="info">
    <div class="info__wrap">
      <div class="info__header">
        <div class="info__header-left"><i class="i-business_center" /><span>Update Company</span></div>
        <div class="info__header-right">
          <div class="btn-wrap">
            <Button label="Cancel" border @click="$emit('changeComponent', 'Overview')" />
            <Button label="Save" :loading="isLoading" @click="submit" />
          </div>
        </div>
      </div>
      <div class="info__main">
        <div class="info__main-container">
          <div class="info__block">
            <div class="info__title"><i class="i-business_center" /> <span>General</span></div>
            <div class="input-wrap">
              <Input
                v-model="settings.businessName"
                placeholder="Enter company name here"
                title="Company name"
                :error="v$.settings.businessName.$error"
                :errorMessage="errorMessage('businessName')"
              />
            </div>
            <div class="info__section-row">
              <div class="input-wrap input-wrap--static">
                <Input
                  v-model="settings.slug"
                  placeholder="Domain"
                  title="Domain"
                  rightText=".asn.tech"
                  :error="v$.settings.slug.$error || slugError"
                  :errorMessage="errorMessage('slug') || 'Company with this identifier already exists in a system'"
                />
              </div>
              <div class="input-wrap">
                <Input
                  v-model="settings.hourlyRate"
                  placeholder="Enter hourly rate"
                  title="Hourly Rate"
                  :error="v$.settings.hourlyRate.$error"
                  :errorMessage="errorMessage('hourlyRate')"
                />
              </div>
            </div>
          </div>
          <div class="info__block">
            <div class="info__section">
              <div class="info__title"><i class="i-business_center" /> <span>Business</span></div>
              <div class="info__section-row">
                <div class="input-wrap">
                  <Input
                    v-model="settings.mainAddress"
                    placeholder="Address"
                    title="Address"
                    :error="v$.settings.mainAddress.$error"
                    :errorMessage="errorMessage('mainAddress')"
                  />
                </div>
                <div class="input-wrap">
                  <Input
                    v-model="settings.businessPhoneNumber"
                    placeholder="Phone"
                    title="Phone"
                    :error="v$.settings.businessPhoneNumber.$error"
                    v-maska="'(###) ### ####'"
                    :errorMessage="errorMessage('businessPhoneNumber')"
                  />
                </div>
              </div>
              <div class="info__section-row">
                <div class="input-wrap">
                  <div class="field__title">Time Zones</div>
                  <Dropdown
                    v-model="settings.timeZoneName"
                    :options="timeZones"
                    placeholder="Choose Time Zone"
                    :error="v$.settings.timeZoneName.$error"
                    :errorMessage="errorMessage('timeZoneName')"
                  >
                  </Dropdown>
                </div>
                <div class="input-wrap">
                  <Input
                    v-model="settings.usersQuota"
                    placeholder="Users Quota"
                    title="Users Quota"
                    :error="v$.settings.usersQuota.$error"
                    :errorMessage="errorMessage('usersQuota')"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="info__block">
            <div class="info__title"><i class="i-user" /> <span>Owner</span></div>
            <div class="input-wrap">
              <Input
                v-model="settings.ownerName"
                placeholder="Owner Name"
                title="Name"
                :error="v$.settings.businessName.$error"
                :errorMessage="errorMessage('ownerName')"
              />
            </div>
            <div class="info__section-row">
              <div class="input-wrap">
                <Input
                  v-model="settings.ownerEmail"
                  placeholder="E-mail"
                  title="E-mail"
                  :error="v$.settings.ownerEmail.$error"
                  :errorMessage="errorMessage('ownerEmail')"
                />
              </div>
              <div class="input-wrap">
                <Input
                  v-model="settings.ownerPhone"
                  placeholder="Phone"
                  title="Phone"
                  :error="v$.settings.ownerPhone.$error"
                  v-maska="'(###) ### ####'"
                  :errorMessage="errorMessage('ownerPhone')"
                />
              </div>
            </div>
          </div>
          <div class="info__block">
            <div class="info__title"><i class="i-supervisor_account" /> <span>Additional</span></div>
            <div class="input-wrap">
              <Input
                v-model="settings.mainContactName"
                placeholder="User Name"
                title="Name"
                :error="v$.settings.mainContactName.$error"
                :errorMessage="errorMessage('mainContactName')"
              />
            </div>
            <div class="info__section-row">
              <div class="input-wrap">
                <Input
                  v-model="settings.mainContactEmail"
                  placeholder="E-mail"
                  title="E-mail"
                  :error="v$.settings.mainContactEmail.$error"
                  :errorMessage="errorMessage('mainContactEmail')"
                />
              </div>
              <div class="input-wrap">
                <Input
                  v-model="settings.mainContactPhone"
                  placeholder="Phone"
                  title="Phone"
                  :error="v$.settings.mainContactPhone.$error"
                  v-maska="'(###) ### ####'"
                  :errorMessage="errorMessage('mainContactPhone')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import useVuelidate from '@vuelidate/core'
import {required, minLength, maxLength, email, numeric, helpers} from '@vuelidate/validators'
import {mapActions, mapMutations, mapState} from 'vuex'
import Button from '@/components/Yaro/Button'
import Input from '@/components/Yaro/Input'
import Dropdown from '@/components/Yaro/Dropdown'

export default {
  name: 'Info',
  components: {Button, Dropdown, Input},
  Input,
  data() {
    return {
      isLoading: false,
      statusList: [
        {name: 'Active', color: '#10b981'},
        {name: 'Inactive', color: '#FA3225'}
      ],
      checkInfo: 'Owner',
      timeZones: [
        'America/Vancouver',
        'America/Toronto',
        'America/Thule',
        'America/Yakutat',
        'America/Virgin',
        'America/Montreal',
        'America/Miquelon',
        'America/Atka'
      ],
      slugError: false
    }
  },
  emits: {changeComponent: null},
  computed: {
    ...mapState({
      settings: s => s.company.settings.settings
    })
  },
  methods: {
    ...mapMutations({
      update: 'company/settings/update'
    }),

    async submit() {
      if (this.isLoading) return
      const result = await this.v$.$validate()
      if (!result) return

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
        loanVehicles,
        rideToWork,
        timeZoneName,
        usersQuota,
        usersCount,
        partsBins,
        initialWalkThrough,
        winterTires,
        hourlyRate
      } = this.settings

      const formattedBusinessPhone = businessPhoneNumber
        .split('')
        .map(c => {
          if (typeof +c === 'number' && !isNaN(c) && c !== ' ') return c
        })
        .join('')
      const formattedOwnerPhone = ownerPhone
        .split('')
        .map(c => {
          if (typeof +c === 'number' && !isNaN(c) && c !== ' ') return c
        })
        .join('')
      const formattedMainContactPhone = mainContactPhone
        .split('')
        .map(c => {
          if (typeof +c === 'number' && !isNaN(c) && c !== ' ') return c
        })
        .join('')

      const settings = {
        slug,
        isActive,
        businessName,
        mainAddress,
        businessPhoneNumber: formattedBusinessPhone,
        ownerName,
        ownerEmail,
        ownerPhone: formattedOwnerPhone,
        mainContactName,
        mainContactEmail,
        mainContactPhone: formattedMainContactPhone,
        hasGlobalWarranty: false,
        loanVehicles,
        rideToWork,
        usersQuota,
        usersCount,
        timeZoneName,
        partsBins,
        initialWalkThrough,
        winterTires,

        hourlyRate
      }

      this.update(settings)
      this.$emit('changeComponent', 'Overview')
    },
    errorMessage(name) {
      const error = this.v$.$errors.find(err => err.$property === name)
      if (error) return error.$message
    }
  },
  validations: {
    settings: {
      businessName: {
        required: helpers.withMessage('Company name is required.', required),
        minLength: helpers.withMessage('Company name must have at least 3 letters.', minLength(3))
      },
      slug: {
        required: helpers.withMessage('Company slug is required.', required),
        minLength: helpers.withMessage('Company slug must have at least 3 letters.', minLength(3))
      },

      mainAddress: {
        required: helpers.withMessage('Company address is required.', required),
        minLength: helpers.withMessage('Company address must have at least 10 letters.', minLength(10))
      },
      businessPhoneNumber: {
        required: helpers.withMessage('Phone number is required.', required),
        minLength: helpers.withMessage('Phone number must contain 10 digits.', minLength(14)),
        maxLength: helpers.withMessage('Phone number must contain 10 digits.', maxLength(14))
      },
      ownerName: {
        required: helpers.withMessage('Owner name is required.', required),
        minLength: helpers.withMessage('Owner name must have at least 3 letters.', minLength(3))
      },
      ownerEmail: {
        required: helpers.withMessage('Owner email is required.', required),
        email: helpers.withMessage('Enter correct email.', email)
      },
      ownerPhone: {
        required: helpers.withMessage('Phone number is required.', required),
        minLength: helpers.withMessage('Phone number must contain 10 digits.', minLength(14)),
        maxLength: helpers.withMessage('Phone number must contain 10 digits.', maxLength(14))
      },
      mainContactName: {
        required: helpers.withMessage('Additional name is required.', required),
        minLength: helpers.withMessage('Contact name must have at least 3 letters.', minLength(3))
      },
      mainContactEmail: {
        required: helpers.withMessage('Additional email is required.', required),
        email: helpers.withMessage('Enter correct email.', email)
      },
      mainContactPhone: {
        required: helpers.withMessage('Additional phone number is required.', required),
        minLength: helpers.withMessage('Phone number must contain 10 digits.', minLength(14)),
        maxLength: helpers.withMessage('Phone number must contain 10 digits.', maxLength(14))
      },
      usersQuota: {
        required: helpers.withMessage('Users Quota is required.', required)
      },
      timeZoneName: {
        required: helpers.withMessage('Time Zone is required.', required)
      },
      hourlyRate: {
        required: helpers.withMessage('Hourly Rate is required.', required),
        numeric
      }
    }
  },
  setup: () => ({v$: useVuelidate()})
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
