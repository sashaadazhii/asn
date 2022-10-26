<template>
  <div class="history__block">
    <div class="history__header">
      <Label :label="card.date" color="#E5E7EB" class="dark" />
      <span>Front Brake Service</span>
      <Label :label="card.type" size="mini" class="-smooth" />
    </div>
    <div class="history__body">{{ card.description }}</div>
  </div>
</template>

<script>
import Label from '@/components/Yaro/Label'

export default {
  name: 'History',
  components: {Label},
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
