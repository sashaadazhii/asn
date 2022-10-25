<template>
  <div class="overview">
    <div class="overview__wrap">
      <div class="overview__overflow">
        <div class="overview__container">
          <div class="overview__header">
            <div class="overview__header-info">
              <div class="overview__header-left">
                <div class="overview__indicator" :class="{green: settings.isActive}">Active</div>
              </div>
              <div class="overview__header-right">
                <div class="overview__title">
                  <span> {{ settings.businessName }}</span>
                  <div class="overview__action">
                    <Menu :list="actionsList" />
                  </div>
                </div>
                <div class="overview__link">
                  <span>{{ settings.slug }}.asn.tech</span> <i class="i-export_info"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="overview__main">
            <div class="overview__block">
              <div class="overview__subtitle"><i class="i-sensor_window" /><span>Business Info</span></div>
              <div class="overview__info">
                <div class="overview__row">
                  <div class="overview__name">Address:</div>
                  <div class="overview__data">
                    <i class="i-location_pin"></i>
                    <span>{{ settings.mainAddress }}</span>
                  </div>
                </div>
                <div class="overview__row">
                  <div class="overview__name">Phone:</div>
                  <div class="overview__data">
                    <i class="i-phone"></i>
                    <span>
                      <a :href="`tel:${settings.businessPhoneNumber}`" @click.stop>{{ settings.businessPhoneNumber }}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="overview__block">
              <div class="overview__subtitle"><i class="i-user" /><span>Owner</span></div>
              <div class="overview__info">
                <div class="overview__row">
                  <div class="overview__name">Name:</div>
                  <div class="overview__data">
                    <span>{{ settings.ownerName }}</span>
                  </div>
                </div>
                <div class="overview__row">
                  <div class="overview__name">Phone:</div>
                  <div class="overview__data">
                    <i class="i-phone"></i>
                    <span>
                      <a :href="`tel:${settings.ownerPhone}`" @click.stop>{{ settings.ownerPhone }}</a>
                    </span>
                  </div>
                </div>
                <div class="overview__row">
                  <div class="overview__name">Email:</div>
                  <div class="overview__data">
                    <i class="i-mail"></i
                    ><span>
                      <a :href="`mailto:${settings.ownerEmail}`" @click.stop>{{ settings.ownerEmail }}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="overview__block">
              <div class="overview__subtitle"><i class="i-supervisor_account" /><span>Other</span></div>
              <div class="overview__info">
                <div class="overview__row">
                  <div class="overview__name">Name:</div>
                  <div class="overview__data">
                    <span>{{ settings.mainContactName }}</span>
                  </div>
                </div>
                <div class="overview__row">
                  <div class="overview__name">Phone:</div>
                  <div class="overview__data">
                    <i class="i-phone"></i
                    ><span>
                      <a :href="`tel:${settings.mainContactPhone}`" @click.stop>{{ settings.mainContactPhone }}</a>
                    </span>
                  </div>
                </div>
                <div class="overview__row">
                  <div class="overview__name">Email:</div>
                  <div class="overview__data">
                    <i class="i-mail"></i
                    ><span>
                      <a :href="`mailto:${settings.mainContactEmail}`" @click.stop>{{ settings.mainContactEmail }}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="overview__sidebar">
          <div
            class="overview__widget"
            :class="{
              hidden: !settings.loanVehicles && !settings.rideToWork && !settings.partsBins && !settings.winterTires && !settings.initialWalkThrough
            }"
          >
            <div class="overview__widget-wrap overview__widget-wrap--top">
              <div class="overview__widget-block">
                <div class="overview__subtitle--long">Users quota:</div>
                <div class="overview__num-wrap">
                  <div class="overview__num">{{ settings.usersCount }}/{{ settings.usersQuota ? settings.usersQuota : 5 }}</div>
                  <div class="overview__num-additional">+7 extra</div>
                </div>
              </div>
            </div>
            <div
              class="overview__widget-wrap overview__widget-wrap--bottom"
              v-if="settings.loanVehicles || settings.rideToWork || settings.partsBins || settings.winterTires || settings.initialWalkThrough"
            >
              <div class="overview__widget-block">
                <div class="overview__subtitle--long">Services:</div>
                <div v-if="settings.loanVehicles" class="overview__widget-info"><i class="i-car_rental"></i> <span>Vehicle in return</span></div>
                <div v-if="settings.rideToWork" class="overview__widget-info"><i class="i-local_taxi"></i> <span>Ride to work</span></div>
                <div v-if="settings.partsBins" class="overview__widget-info"><i class="i-archive"></i> <span>Parts Bins</span></div>
                <div v-if="settings.initialWalkThrough" class="overview__widget-info"><i class="i-video_call"></i> <span>Initial Walk Through</span></div>
                <div v-if="settings.winterTires" class="overview__widget-info"><i class="i-autorenew"></i> <span>Winter Tires Card</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import Menu from '@/components/Yaro/Menu'

export default {
  name: 'Overview',
  components: {Menu},
  data() {
    return {
      actionsList: [
        {
          label: 'Edit Company',
          icon: 'i-edit',
          command: () => {
            this.$emit('changeComponent', 'Edit')
          }
        }
      ]
    }
  },
  emits: {changeComponent: null},
  computed: {
    ...mapState({
      settings: s => s.company.settings.settings
    })
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
