<template>
  <div class="header__wrapper">
    <div class="header__inner">
      <div class="header__left">
        <Dropdown v-model="day" :options="days" size="medium" @change="changeDay">
          <template #value="{value}">
            <div class="y-dropdown-label-custom">
              <span class="-title">Time Period:</span>
              <span>{{ value }} </span>
            </div>
          </template>
          <template #option="{option}">
            <div class="y-dropdown-item-custom">
              <span>{{ option }}</span>
            </div>
          </template>
        </Dropdown>
        <DatePicker v-if="day === 'Custom'" v-model="date" locale="en-Ca" @dayclick="changeDay">
          <template v-slot="{inputValue, inputEvents}">
            <label class="picker__wrap">
              <span>Date:</span>
              <i class="i-calendar" />
              <input :value="inputValue" v-on="inputEvents" />
              <span class="picker__value">{{ inputValue }}</span>
            </label>
          </template>
        </DatePicker>
      </div>
      <div class="header__right">
        <Filter
          v-model="activeFilters"
          :options="filtersList"
          :filterFields="['firstName', 'lastName']"
          dataKey="id"
          optionListLabel="name"
          optionListChildren="list"
          @change="changeFilters"
        >
          <template #optionlist="{option}">
            <div class="filter__option">
              <i v-if="option.name === 'Technician'" class="i-build" />
              <i v-if="option.name === 'Service Advisor'" class="i-headset_mic" />
              <span>{{ option.name }}</span>
            </div>
          </template>
          <template #option="{option}">
            <div class="filter__option">
              <div class="filter__option--pin">{{ option.firstName[0] }}{{ option.lastName[0] }}</div>
              <span>{{ option.firstName }} {{ option.lastName }}</span>
            </div>
          </template>
        </Filter>
        <Button icon="i-settings" border size="small" />
      </div>
    </div>
    <div v-if="activeFilters.length" class="header__chips">
      <div v-for="chip of activeFilters" :key="chip.id" class="chip">
        <div class="chip__icon">
          <i v-if="chip.type === 'Technician'" class="i-build" />
          <i v-if="chip.type === 'Service Advisor'" class="i-headset_mic green" />
        </div>
        <div class="chip__name">{{ chip.firstName }} {{ chip.lastName }}</div>
        <div class="chip__close" @click="removeChip(chip.id)"><i class="i-close" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Filter from '@/components/Yaro/Filter'
import Button from '@/components/Yaro/Button'
import Dropdown from '@/components/Yaro/Dropdown'
import {mapActions, mapState, mapMutations} from 'vuex'
import {DatePicker} from 'v-calendar'
import dayjs from 'dayjs'

export default {
  name: 'WorkBoardTaskHeader',
  components: {Filter, Button, Dropdown, DatePicker},
  data() {
    return {
      activeFilters: [],
      filtersList: [],
      date: new Date(),
      day: 'Today',
      days: ['Today', 'Custom'],
      shift: {name: 'Day Shift'}
    }
  },
  async created() {
    const techsList = await this.searchUsers({role: 'technician'})
    const technicians = {
      name: 'Technician',
      id: this.$getID(),
      mods: ['filter', 'multiple'],
      filterPlaceholder: 'Search Tech',
      list: techsList
    }
    this.filtersList.push(technicians)
  },
  computed: {
    ...mapState({
      orders: s => s.workOrder.workOrders,
      shifts: s => {
        const shifts = s.company.shifts.shifts
        return [{name: 'All'}, ...shifts]
      }
    })
  },
  methods: {
    ...mapActions({
      searchUsers: 'company/users/search',
      fetchBoard: 'workOrder/fetchBoard'
    }),
    ...mapMutations({
      setFilters: 'workOrder/setFilters'
    }),
    removeChip(id) {
      this.activeFilters = this.activeFilters.filter(c => c.id !== id)
    },
    formattedRange(formatDate) {
      const date = dayjs(formatDate)
      const {day: dayType} = this
      switch (dayType) {
        case 'Day':
          return date.format('DD MMM YYYY')
        case 'Three Days':
          return `${date.format('DD MMM YYYY')} ~ ${date.add(2, 'day').format('DD MMM YYYY')}`
        case 'Five Days':
          return `${date.format('DD MMM YYYY')} ~ ${date.add(4, 'day').format('DD MMM YYYY')}`
      }
    },
    async changeFilters({value}) {
      const techs = value.filter(i => i.type === 'Technician').map(t => t.id)
      this.setFilters(techs)
    },
    changeDay() {
      const day = {type: this.day, date: this.date}
      this.$emit('changeDay', day)
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'style';
</style>
