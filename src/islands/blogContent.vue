<template>
  <div v-if="blogContent" id="blog-content">
    <section class="bg-[#161616] bgHome pb-24 pt-8 sm:py-12 sm:pb-40 mb-9">
      <div class="wrapper px-5">
          <!-- Breadcrumb -->
        <nav class="flex py-5 text-white" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li>
              <div class="flex items-center">
                <router-link to="/" ><svg class="w-4 h-4 mr-2" fill="#F59E0B" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg></router-link>
                <router-link to="/blog/" class="text-sm font-medium text-amber-500 hover:text-amber-400 md:ml-2">
                Blog
                </router-link>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-white" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span  class="ml-1 text-sm font-medium text-amber-500 md:ml-2">{{blogContent.title}}</span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 class=" text-4xl sm:text-5xl text-white mb-4 font-bold">{{blogContent.title}}</h1>
        <h6 class=" text-lg sm:text-2xl text-amber-500">Author: {{blogContent.author}}</h6>
        <h6 class=" text-sm sm:text-lg text-amber-400">Updated: {{getDate(blogContent._updatedAt)}}</h6>
      </div>
    </section>
    <figure class="wrapper px-5">
      <img id="featureImage" :src="blogContent.thumbnail.url"  class="rounded-2xl h-30 md:h-[400px] w-full object-cover mb-4 -mt-28 sm:-mt-40" alt="">
    </figure>
      <div class="single-post wrapper px-5 pb-10" v-html="blogContent.body"></div>
    <mainFooter/>
  </div>
</template>
<script>
  import axios from 'axios';
  import mainFooter from '../components/footer.vue'

  const API_KEY = 'be6c81916719fbeb4ceb0f0c00a84c';
  const API_URL = 'https://graphql.datocms.com/';

export default{
  data() {
    return {
      blogContent: null
    }
  },
  components: {mainFooter},
  computed: {
    postSlug() {
      return this.$route.params.slug;
    },
    query() {
      return `{
      article(filter: {slug: {eq:"${this.postSlug}"}}) {
        id
        slug
        body(markdown: true)
        _updatedAt
        author
        summary
        title
        thumbnail {
          url
        }
      }
      }
      `;
    },
  },
  methods: {
    async getPosts(){
      const response = await axios.post(API_URL, {
        query: this.query,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        }
      }
    )
    this.blogContent = response.data.data.article;
    console.log(response.data.data)

    },
    getDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('default', {dateStyle: 'short'}).format(date);
    }
  },
  mounted() {
    this.getPosts();
  }
}
</script>

<style scoped lang="scss">
.single-post {
  h1,h2,h3,h4 {
    font-weight: bold;
    margin-bottom: 0.5em !important;
    line-height: normal;
    font-size: 2rem;
    margin-block: 0.5em;
  }

  code, kbd, samp, pre {
  background: lightgray !important;
  }
}
</style>
