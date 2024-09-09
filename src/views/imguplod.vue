<template>
  <div>
    <h1>Image Upload</h1>
    <input type="file" @change="onFileChange">
    <button @click="uploadImage">Upload</button>

    <h2>Uploaded Images</h2>
    <div v-if="images.length">
      <div v-for="image in images" :key="image._id.$oid">
        <img :src="'data:image/jpeg;base64,' + image.content" :alt="image.filename" width="200">
        <p>{{ image.filename }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedFile: null,
      images: []
    }
  },
  methods: {
    onFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    async uploadImage() {
      if (this.selectedFile) {
        const formData = new FormData();
        formData.append('file', this.selectedFile);

        try {
          await axios.post('http://localhost:8000/upload/', formData);
          alert('Image uploaded successfully!');
          this.fetchImages();
        } catch (error) {
          console.error(error);
        }
      } else {
        alert('Please select a file first.');
      }
    },
    async fetchImages() {
      try {
        const response = await axios.get('http://localhost:8000/images/');
        this.images = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.fetchImages();
  }
}
</script>

<style scoped>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  margin: 10px 0;
}
</style>
