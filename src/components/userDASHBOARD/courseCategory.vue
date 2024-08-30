<template>
  <div class=" bg-dark mx-auto px-4 py-8">
    <h1 class="text-3xl text-white font-bold mb-8 text-center">Course Categories</h1>
    <p class="text-white font-serif">Choose the course you like to learn</p>

    <!-- Display Categories -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="category in paginatedCategories"
        :key="category"
        class="border bg-dark border-success p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow  duration-500"
      >
        <router-link
          :to="`/category/${category}`"
          class="text-lg font-semibold text-blue-600 hover:underline"
        >
        <button class="btn btn-primary hover:bg-secondary"> {{ category }}</button>

         
        </router-link>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="mt-8 flex justify-center items-center space-x-4">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        Previous
      </button>
      <span class="text-lg font-medium text-white">Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        'HTML', 'CSS', 'JavaScript', 'Vue.js', 'Node.js', 'React', 'Angular', 
        'Python', 'Django', 'Flask', 'Ruby', 'Rails', 'Java', 'Spring Boot', 
        'Kotlin', 'Swift', 'iOS Development', 'Android Development', 'C#', 
        '.NET', 'PHP', 'Laravel', 'Symfony', 'C++', 'C', 'Go', 'Rust', 
        'TypeScript', 'Svelte', 'Next.js', 'Nuxt.js', 'GraphQL', 'SQL', 
        'NoSQL', 'MongoDB', 'Firebase', 'PostgreSQL', 'MySQL', 'SQLite', 
        'Data Structures', 'Algorithms', 'Machine Learning', 'Artificial Intelligence', 
        'Data Science', 'Big Data', 'Hadoop', 'Spark', 'Blockchain', 
        'Cryptocurrency', 'DevOps', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 
        'AWS', 'Azure', 'Google Cloud', 'Serverless', 'Microservices', 'APIs', 
        'REST', 'SOAP', 'Web Security', 'Ethical Hacking', 'Penetration Testing', 
        'Cybersecurity', 'Game Development', 'Unity', 'Unreal Engine', '3D Modeling', 
        'Virtual Reality', 'Augmented Reality', 'UI/UX Design', 'Figma', 
        'Adobe XD', 'Photoshop', 'Illustrator', 'Sketch', 'Responsive Design', 
        'Web Performance', 'Accessibility', 'Testing', 'Jest', 'Mocha', 'Chai', 
        'Cypress', 'Puppeteer', 'WebAssembly', 'Mobile Development', 'Progressive Web Apps', 
        'SEO', 'Content Management Systems', 'WordPress', 'Joomla', 'Drupal', 
        'E-commerce', 'Shopify', 'WooCommerce', 'Magento', 'Salesforce', 
        'Marketing Automation', 'Email Marketing', 'Social Media Marketing', 
        'Digital Marketing', 'Business Intelligence', 'Data Visualization', 
        'Tableau', 'Power BI', 'Qlik', 'Excel', 'Google Sheets', 'R', 
        'MATLAB', 'SAS', 'SPSS', 'Project Management', 'Agile', 'Scrum', 
        'Kanban', 'Lean', 'Product Management', 'Entrepreneurship', 
        'Leadership', 'Public Speaking', 'Communication Skills', 'Time Management', 
        'Personal Development'
      ],
      currentPage: 1,
      pageSize: 12 // Number of categories per page
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.categories.length / this.pageSize);
    },
    paginatedCategories() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.categories.slice(start, end);
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  }
};
</script>
