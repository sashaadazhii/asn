<template>
  <div class="block__wrapper">
    <div class="block__header">
      <label id="dropbox" class="block__drop">
        <input class="block__drop-input" multiple type="file" accept="image/*" @change="handleFileUpload" />
        <i class="i-cloud_upload" />
        <span>Upload Media</span>
      </label>
      <div class="block__qr">
        <i class="i-qr_code_2" />
      </div>
    </div>
    <div class="block__body">
      <div class="block__imgs">
        <div v-for="(img, idx) of images" :key="idx" class="block__img">
          <img :src="img" />
          <div class="block__img-hover" @click="del(idx)">
            <div class="block__img-remove">
              <i class="i-delete_forever" />
              <span>Remove</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPageMedia',
  components: {},

  data() {
    return {
      images: []
    }
  },
  mounted() {
    this.drop()
  },
  methods: {
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
      // this.files.push(...files)
      for (let file of files) {
        this.images.push(window.URL.createObjectURL(file))
      }
    },
    handleFileUpload(e) {
      this.addFile(e.target.files)
    },
    del(idx) {
      this.images.splice(idx, 1)
      // this.files.splice(idx, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
