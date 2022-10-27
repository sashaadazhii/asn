<template>
  <div class="checkout-wrapper">
    <div class="checkout">
      <div class="inspection__wrapper inspection">
        <div class="inspection__header">
          <div @click="$router.back()" class="inspection__link">
            <i class="i-keyboard_arrow_left" />
          </div>
        </div>
        <div v-if="assets.length" class="slider__wrapper slider">
          <div class="slider__view">
            <div v-if="showControls && selectedMedia.type === 'video'" class="slider__controls">
              <span @click="play"><i class="i-play" /></span>
            </div>
            <video
              v-if="selectedMedia.type === 'video'"
              ref="video"
              poster="@/assets/images/img5.png"
              :src="require(`@/assets/video/${selectedMedia.src}`)"
              @click="stop"
            />
            <img v-if="selectedMedia.type === 'image'" :src="require(`@/assets/images/${selectedMedia.src}`)" alt="chosen image" />
            <div class="slider__title">{{ selectedMedia.title }}</div>
          </div>
          <div class="slider__list">
            <div v-for="asset in assets" :key="asset.id" class="slider__thumb" :class="{'-active': show(asset.id)}">
              <video
                v-if="asset.type === 'video'"
                :src="require(`@/assets/video/${asset.src}`)"
                poster="@/assets/images/img5.png"
                @click="selectMedia(asset)"
              />
              <img v-if="asset.type === 'image'" :src="require(`@/assets/images/${asset.src}`)" :alt="asset.type" @click="selectMedia(asset)" />
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card__header">
            <Label :label="card.status" size="small" />
            <!-- {{ card }} -->
          </div>
          <div class="card__main"></div>
          <div class="card__title">{{ card.name }}</div>
          <div class="list__wrap">
            {{ parts }}
            <!-- <ul class="card__list list">
            <li v-for="part in parts" :key="part.id" class="list__item">
              <div class="list__icon"><i class="i-build" /></div>
              <div class="list__info">
                <div class="list__text">{{ part.title }}</div>
                <div class="list__desc">{{ part.description }}</div>
              </div>
              <div class="list__text amount">{{ formatter(part.price) }}</div>
            </li>
          </ul> -->
            <div class="list__footer">
              <div class="list__text">Total Price</div>
              <!-- <div class="list__text">{{ formatter(parts.reduce((sum, current) => sum + current.price, 0)) }}</div> -->
            </div>
          </div>
        </div>
        <!--
    <div class="card__footer">
      <div v-if="card.status === 'Recommended'" class="card__footer-buttons">
        <Button icon="i-circle_close" border grey @click="openDeclineModal" />
        <Button label="Approve" @click="openApproveModal" />
      </div>
      <div v-else>
        <Label
          :label="card.approvedWith"
          :icon="card.status === 'Done' ? 'i-check_circle' : 'i-circle_close'"
          :color="card.status === 'Done' ? '#E7F8F2' : '#FEF2F2'"
          :style="card.status === 'Done' ? 'border-color : #9FE3CD' : 'border-color: #FAC9C9'"
          size="large"
          class="label--inspection"
        />
      </div>
    </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Label from '@/components/Yaro/Label'
// import Button from '@/components/Yaro/Button'
// import AskingDeclineModal from '../AskingDeclineModal'
// import AskingApproveModal from '../AskingApproveModal'

export default {
  name: 'WorkOrrderCheckout',
  components: {Label},
  data() {
    return {
      selectedMedia: {},
      showControls: true,
      parts: [],
      readyParts: [],
      assets: [
        {
          id: '289043r',
          type: 'image',
          src: 'img1.png'
        },
        {
          id: '12r43r2',
          type: 'video',
          src: `video1.mp4`
        },

        {
          id: '389srqq43r',
          type: 'image',
          src: 'img2.png'
        },
        {
          id: '389srqq43r',
          type: 'image',
          src: 'img2.png'
        },
        {
          id: '389srqq43r',
          type: 'image',
          src: 'img3.png'
        },
        {
          id: '389srqq43r',
          type: 'image',
          src: 'img4.jpeg'
        },
        {
          id: '389srqq43r',
          type: 'image',
          src: 'img5.png'
        }
      ]
    }
  },
  async created() {
    const [firstMedia] = this.assets
    this.selectMedia(firstMedia)

    this.order.cannedServices.forEach(c => {
      let part = c.parts
      part.forEach(p => this.parts.push(p))
    })
    console.log(this.order)
  },
  computed: {
    ...mapState({
      order: s => s.workOrder.workOrder,
      card: s => s.company.cards.card
    })
  },
  methods: {
    ...mapActions({}),
    labelColor() {
      const status = this.card.status
      switch (status) {
        case 'Component Unsafe':
          return '#F37878'
        case 'Recommended':
          return ' #FFA14E'
        case 'Done':
          return '#10B981'
        default:
          return '#6b7280'
      }
    },
    formatter(val) {
      const price = new Intl.NumberFormat('en-CA', {style: 'currency', currency: 'CAD'}).format(val)
      return price
    },
    selectMedia(media) {
      if (media.id === this.selectedMedia.id) return
      this.selectedMedia = media
      this.showControls = true
    },
    play() {
      this.$refs.video.play()
      this.showControls = false
    },
    stop() {
      this.showControls = true
      this.$refs.video.pause()
    },
    show(id) {
      if (this.selectedMedia.id === id) return true
    }
    // openApproveModal() {
    //   this.$vfm.show(
    //     {
    //       component: AskingApproveModal,
    //       bind: {
    //         name: 'AskingApproveModal'
    //       }
    //     },
    //     this.card.id
    //   )
    // },
    // openDeclineModal() {
    //   this.$vfm.show(
    //     {
    //       component: AskingDeclineModal,
    //       bind: {
    //         name: 'AskingDeclineModal'
    //       }
    //     },
    //     this.card.id
    //   )
    // }
  }
}
</script>
<style scoped lang="scss">
@import 'style';
</style>
