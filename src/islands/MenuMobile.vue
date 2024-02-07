<script>
export default {
  methods:{
    openModal() {
      this.menuModal = true
    }
  },
  data() {
    return {
      menuModal: false,
      menu: [
        {name: 'About', url:'/'},
        {name: 'Portfolio', url:'/portfolio'},
        //  {name: 'Blog', url:'/blog'},
      ],
      social : [
        {
          name: "LinkedIn",
          URL: "https://www.linkedin.com/in/sergiorozco/",
          img: "/icons/social/Linkedin.svg",
        },
        {
          name: "Github",
          URL: "https://github.com/Sergioaorozco",
          img: "/icons/social/Github.svg",
        },
        {
          name: "Whatsapp",
          URL: "https://api.whatsapp.com/send?phone=573007869517",
          img: "/icons/social/Whatsapp.svg",
        },
      ],
    }
  }
}


</script>
<template>
<div @click="openModal"  class="border border-slate-100 px-2 py-1 rounded-lg bg-slate-800/15">Menu</div>
<div v-if="menuModal" class="w-screen max-h-screen bg-slate-950/90 backdrop-blur-md fixed top-0 bottom-0 left-0 right-0 z-50 px-5">
  <div class="flex flex-col justify-between h-full pb-4">
    <div class="lg:hidden flex justify-between items-center mt-5 px-2 text-lg">
      <a href="/" class="size-8"><img src="../../images/header-logo.svg" alt="Logo Sergio Orozco"></a>
      <p @click="menuModal = false" class="px-3 py-1 border border-slate-100 rounded-lg">Close</p>
    </div>
    <ul class="flex flex-col list-none w-full">
      <li v-for="item in menu" class="hover:text-slate-300 transition-colors duration-300 list-none border-t first:border-t-0 h-28 py-5 flex justify-center items-center border-slate-100">
        <a class="contents h-full w-full text-5xl font-semibold italic" :href=item.url>{{item.name}}</a>
      </li>
    </ul>
    <section class="flex justify-between">
      <ul class="flex gap-x-2 items-center justify-center lg:justify-start">
        <li v-for="net in social" class="hover:brightness-150 hover:filter transition-all duration-200 size-10">
          <a :href=net.URL target="_blank" rel="noopener noreferrer">
            <img width="60" height="60" :src=net.img :alt=net.img />
          </a>
        </li>
      </ul>
      <a class="bg-amber-500 justify-center lg:justify-start lg:w-auto text-slate-900 font-bold italic text-sm lg:text-md hover:bg-amber-400 transition-all duration-200 rounded-full px-4 py-2 flex gap-x-2 items-center hover:gap-x-4" href="#" target="_blank">Download Resume
        <slot></slot>
      </a>
    </section>
  </div>
</div>
</template>
<style>
</style>