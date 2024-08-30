<template>
    <Landnav></Landnav>
    <div class="submit-assignment-container">
      <h2>KIndly upload your Task here</h2>
      <h2 class="submit-assignment-title">{{ title }}</h2>
      <p class="submit-assignment-description">{{ description }}</p>
  
      <form @submit.prevent="submitAssignment">
        <div class="file-upload">
          <label for="htmlFile" class="file-label">HTML:</label>
          <input 
            type="file" 
            id="htmlFile" 
            @change="handleFileUpload" 
            :accept="acceptedFormats" 
            class="file-input"
          />
        </div>
        <div class="file-upload">
          <label for="cssFile" class="file-label">CSS:</label>
          <input 
            type="file" 
            id="cssFile" 
            @change="handleFileUpload" 
            :accept="acceptedFormats" 
            class="file-input"
          />
        </div>
        <button type="submit" class="submit-assignment-btn">Submit</button>
      </form>
  
      <div class="score-info">
        <p>You can check your score later <span class="check-here">here</span>.</p>
        <p v-if="score !== null" class="score-display">Your Score: {{ score }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import Landnav from '@/components/landnav.vue';
  import { ref } from 'vue';
  
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    acceptedFormats: {
      type: String,
      default: '.css, .html', // Accept only CSS and HTML files by default
    }
  });
  
  const selectedFile = ref(null);
  const score = ref(null); // Placeholder for score data
  
  const handleFileUpload = (event) => {
    selectedFile.value = event.target.files[0];
    console.log('Selected file:', selectedFile.value);
  };
  
  const submitAssignment = () => {
    if (!selectedFile.value) {
      alert('Please select a file before submitting.');
      return;
    }
  
    // Implement the file submission logic here, such as sending the file to a server
    console.log('Submitting file:', selectedFile.value);
    alert(`File "${selectedFile.value.name}" submitted successfully!`);
  
    // Reset the file input after submission
    selectedFile.value = null;
    document.getElementById('htmlFile').value = '';
    document.getElementById('cssFile').value = '';
  
    // Simulate score retrieval (this would be replaced with an actual API call)
    setTimeout(() => {
      score.value = Math.floor(Math.random() * 101); // Simulate score between 0-100
    }, 2000);
  };
  </script>
  
  <style scoped>
  .submit-assignment-container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
    /* Centering */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .submit-assignment-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
  }
  
  .submit-assignment-description {
    font-size: 16px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .file-upload {
    margin-bottom: 20px;
  }
  
  .file-label {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
  }
  
  .file-input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .submit-assignment-btn {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 18px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  .submit-assignment-btn:hover {
    background-color: #45a049;
  }
  
  .score-info {
    margin-top: 20px;
    text-align: center;
  }
  
  .check-here {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
  
  .score-display {
    font-size: 18px;
    font-weight: bold;
    color: #4caf50;
    margin-top: 10px;
  }
  </style>
  