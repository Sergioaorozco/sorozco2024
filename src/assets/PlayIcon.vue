<script setup lang="js">
const props = defineProps(['isPlay'])
</script>
<template>
  <svg v-if="!isPlay" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play-filled"
    width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
      stroke-width="0" fill="currentColor" />
  </svg>
  <svg v-else xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause-filled"
    width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"
      stroke-width="0" fill="currentColor" />
    <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"
      stroke-width="0" fill="currentColor" />
  </svg>
</template>