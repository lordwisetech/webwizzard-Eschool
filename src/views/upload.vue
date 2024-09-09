<template>
    <div
      class="drag-drop-upload"
      @dragover.prevent
      @drop.prevent="onDrop"
    >
      <p class="text-white">Drag & drop an image here or click to select one.</p>
      <input type="file" @change="onFileChange" accept="image/*" style="display: none;" ref="fileInput"/>
      <p class="text-white">image here</p>
      <div v-if="imageUrl">
        <img :src="imageUrl" alt="Uploaded Image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageUrl: null,
      };
    },
    methods: {
      onFileChange(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
          this.imageUrl = URL.createObjectURL(file);
        } else {
          this.imageUrl = null;
        }
      },
      onDrop(event) {
        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
          this.imageUrl = URL.createObjectURL(file);
        } else {
          this.imageUrl = null;
        }
      },
    },
  };
  </script>
  
  <style>
  .drag-drop-upload {
    border: 2px dashed #ccc;
    padding: 20px;
    text-align: center;
    cursor: pointer;
  }
  
  .drag-drop-upload img {
    max-width: 100%;
    height: auto;
    margin-top: 10px;
  }
  </style>
  