<template>
  <div class="container">
    <h1 class="my-4 text-center text-white">
      Videos for {{ $route.params.name }} - Step-by-Step Learning
    </h1>

    <!-- Progress Bar -->
    <p class="text-white" >Daily progress</p>
    <div class="progress mb-4">
      
      <div
        class="progress-bar"
        role="progressbar"
        :style="{ width: progress + '%' }"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ progress }}%
      </div>
    </div>

    <div v-if="videos.length">
      <!-- Current Video Display -->
      <div class="row justify-content-center">
        <div class="col-12 col-md-8">
          <div class="video-item p-3 border rounded shadow-sm">
            <h3 class="h5 mb-3 text-white">{{ currentVideo.snippet.title }}</h3>
            <iframe
              :src="`https://www.youtube.com/embed/${currentVideo.id.videoId}`"
              frameborder="0"
              allowfullscreen
              class="w-100"
              style="height: 400px;"
            ></iframe>
            <p class="mt-3 text-white">{{ currentVideo.snippet.description }}</p>
          </div>
        </div>
      </div>

      <!-- Pagination for next topic -->
      <div class="row justify-content-center mt-10">
        <div class="col-12 col-md-8 text-center">
          <button
            @click="nextVideo"
            class="btn btn-primary pb-6"
            :disabled="currentIndex >= videos.length - 1"
          >
            Proceed to the Next Topic
          </button>
        </div>
      </div>
    </div>

    <div v-else>
      <p v-if="!videos.length" class="text-white">Loading....</p>
      <div v-if="loading" class="text-white spinner-border m-5" role="status"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      videos: [],
      loading: true,
      currentIndex: 0,
    };
  },
  computed: {
    currentVideo() {
      return this.videos[this.currentIndex];
    },
    progress() {
      return ((this.currentIndex + 1) / this.videos.length) * 100;
    },
  },
  async mounted() {
    try {
      const response = await axios.get('https://webwizzard-server.onrender.com/api/videos', {
        params: {
          tag: this.$route.params.name,
        },
      });
      this.videos = response.data;
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    nextVideo() {
      if (this.currentIndex < this.videos.length - 1) {
        this.currentIndex++;
      }
    },
  },
};
</script>

<style scoped>
.progress-bar {
  background-color: #007bff;
}

.video-item {
  transition: transform 0.2s ease-in-out;
}

.video-item:hover {
  transform: translateY(-5px);
}

iframe {
  border-radius: 8px;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
