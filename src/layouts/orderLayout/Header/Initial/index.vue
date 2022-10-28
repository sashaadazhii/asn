<template>
  <vue-final-modal v-slot="{close}">
    <div class="modal__wrapper">
      <div class="modal__header">
        <i class="i-arrow_back" @click="back" />
        <span>Initial Walk Around:</span>
        <Button icon="i-circle_close" border grey circle iconSize="20px" size="small" @click="close" />
      </div>

      <div class="modal__qr">
        <i class="i-qr_code_2" />
        <div class="modal__qr-title">Scan this QR code to upload photos from your phone</div>
        <div class="modal__qr-subtitle">Redirects you to your phone camera, uploads right here.</div>
      </div>
      <label id="dropbox" class="modal__drop">
        <input class="modal__drop-input" multiple type="file" accept="image/*" @change="handleFileUpload" />
        <i class="i-cloud_upload" />
        <div class="modal__drop-title">Drag files here or press to choose from your computer</div>
        <div class="modal__drop-subtitle">
          Upload JPG and PNG images or MOV and AVI videos using QR-code or your computer. Your files must be less than
          <span class="-bluegreen"> 10 Mb</span> and shorter than <span class="-blue">10 sec</span>.
        </div>
      </label>
      <div v-if="images && images.length" class="modal__imgs">
        <div v-for="(img, idx) of images" :key="idx" class="modal__img">
          <img :src="img" />
          <i class="i-circle_close" @click="del(idx)" />
        </div>
      </div>
      <div class="modal__add_note" @click="addNote">
        <i class="i-sticky_note" />
        <span>Start typing your note here...</span>
      </div>
      <div v-if="notes" class="modal__notes">
        <div v-for="note of notes" :key="note.id" class="modal__note note">
          <div class="note__header">
            <i :class="`i-sticky_note ${note.color}`" />
            <div class="note__label">MM</div>
            <div class="note__details">
              <div class="note__details-cus">Maynard Bauman</div>
              <div class="note__details-date">14:53 23 Jun 2022</div>
            </div>
            <Menu :list="actionsList">
              <template #item="{item}">
                <div @click="delNote(note)">
                  <i :class="item.icon" />
                  <span class="y-menu__item--text">{{ item.label }}</span>
                </div>
              </template>
            </Menu>
          </div>
          <div class="note__body">{{ note.text }}</div>
        </div>
      </div>
      <Button label="Save & Proceed to Work Order" size="large" @click="hide" />
    </div>
  </vue-final-modal>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import Button from '@/components/Yaro/Button'
import Menu from '@/components/Yaro/Menu'
import Mileage from '../Mileage'
import Note from '../Note'

export default {
  name: 'InitialWalkAround',
  components: {Button, Menu},
  data() {
    return {
      files: [],
      images: [],
      actionsList: [
        {
          label: 'Delete',
          icon: 'i-remove_circle red'
        }
      ]
    }
  },
  mounted() {
    this.drop()
  },
  computed: {
    ...mapState({
      notes: s => s.workOrder.notes
    })
  },
  methods: {
    ...mapMutations({
      changeNotes: 'workOrder/changeNotes',
      changeInitial: 'workOrder/changeInitial'
    }),
    delNote(note) {
      this.changeNotes({note, action: 'delete'})
    },
    back() {
      this.$vfm.hide('Initial')
      this.$vfm.show({
        component: Mileage,
        bind: {
          name: 'Mileage'
        }
      })
    },
    handleFileUpload(e) {
      this.addFile(e.target.files)
    },
    drop() {
      const dropbox = document.getElementById('dropbox')
      const addFile = this.addFile
      dropbox.addEventListener('dragenter', dragenter, false)
      dropbox.addEventListener('dragover', dragover, false)
      dropbox.addEventListener('drop', drop, false)
      function dragenter(e) {
        e.stopPropagation()
        e.preventDefault()
      }
      function dragover(e) {
        e.stopPropagation()
        e.preventDefault()
      }
      function drop(e) {
        e.stopPropagation()
        e.preventDefault()
        addFile(e.dataTransfer.files)
      }
    },
    addFile(files) {
      this.files.push(...files)
      for (let file of files) {
        this.images.push(window.URL.createObjectURL(file))
      }
    },
    del(idx) {
      this.images.splice(idx, 1)
      this.files.splice(idx, 1)
    },
    addNote() {
      this.$vfm.hide('Initial')
      this.$vfm.show({
        component: Note,
        bind: {
          name: 'Note'
        }
      })
    },
    hide() {
      this.$vfm.hide('Initial')
      this.changeNotes({note: null}), this.changeInitial()
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'style';
</style>
