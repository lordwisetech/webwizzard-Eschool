<template>
    <div class="assignment-container">
      <h2 class="assignment-title">{{ title }}</h2>
      <p class="assignment-question">{{ question }}</p>
  
      <h2>You dont have any task at the moment , Enjoy the silent!</h2>
  
      
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
  });
  
  const userAnswer = ref('');
  
  const submitAnswer = () => {
    console.log('Answer submitted:', userAnswer.value);
    alert(`Your answer: "${userAnswer.value}" has been submitted!`);
    userAnswer.value = ''; // Clear the textarea after submission
  };
  </script>
  
  <style scoped>
  .assignment-container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  
    /* Centering */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .assignment-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
  }
  
  .assignment-question {
    font-size: 18px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .assignment-textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
  }
  
  .assignment-submit-btn {
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
  
  .assignment-submit-btn:hover {
    background-color: #45a049;
  }
  </style>
  