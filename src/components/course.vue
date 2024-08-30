<script setup>
import { ref } from 'vue'

// Set up a reactive reference for the active tab
const activeTab = ref('javascript')

// Function to set the active tab
const setActiveTab = (tabName) => {
    activeTab.value = tabName
}
</script>

<template>    
    <div class="custom-shadow m-4 border-3 border-dark container-span ">
        <div class="card text-center bg-dark text-white">
            <h1 class="font-serif p-3">A broad selection of courses</h1>
            <p>Choose from over 220,000 online video courses with new additions published every month</p>
            <div class="card-header">
                
            </div>
            <div class="card-body text-center">         
                <!--javascrip start here-->
                <div v-if="activeTab === 'javascript'">
                  
                  <div class="container">
                     <div class="row border-3 border-success rounded-lg">
                      <h5 class="p-6 font-bold ">OUR FOCUS</h5> <hr>

                  <!--javascrip section and first column-->
                  <div class="col-sm-5 ml-7 font-serif text-justify p-10">
                      
                    <p class="  font-extrabold">Welcome to WEBWIZZARD ESCHOOL in this space you will learn the foudamentals of coding and probllem-sloving usnig programming languages. Whelther you are completely new to programming or have some experience, this space will guide you through essentials concepts and practical skills. By the end , you will be equiped to create your own programs and tackle various coding challenges. Lest dive in and start buiding your programming skills. See you there</p>
                      <a href="/register" class="btn mb-3 btn-primary">Learn more</a>
                  </div>

                  <!--second column of javascrip-->
                  <div class="col-sm-6 ">
                   <img src="/images/node.jpg" class="mb-5 rounded-xl shadow-lg">
                  </div>
                     </div>
                  </div>
                
              </div>
            </div>
        </div>
    </div>
</template>
