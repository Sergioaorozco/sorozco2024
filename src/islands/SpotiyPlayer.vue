<script lang="js" setup>
  import {ref} from 'vue'
  import PlayIcon from "../assets/PlayIcon.vue";
  const itemPlaying = ref('')
  const props = defineProps(['songs'])
  const playSong = (item, index) => {
    const player =  document.getElementById(`spotiSong_${index}`);
    if(player.paused) {
      player.play()
      itemPlaying.value = ref(index)
    } else {
      player.pause()
      itemPlaying.value = ref('')
    }

    // Other Players
    for(let i =0; i <= props.songs.length; i++) {
      if(i !== index) {
        const OtherPlayers =  document.getElementById(`spotiSong_${i}`);
        console.log(OtherPlayers)
        OtherPlayers.pause()
      }
    }
  }


  function checkProp (index)  {
    const item =itemPlaying.value.value
    return item === index
  }

</script>
<template>
  <div class="flex flex-col gap-y-3 px-3 py-3 bg-slate-800/40 border border-slate-600 rounded-md">
    <div class="flex justify-between items-center mb-4">
      <p class="text-slate-400 font-semibold text-xl">Trendy Songs</p>
      <a href="https://open.spotify.com/playlist/3tzVgXTTkeQO7YsfREXUed?si=56b2bda593d54f98" class="hover:brightness-75 hover:scale-105 transition-all duration-300" target="_blank" rel="noopener noreferrer">
        <img src="../../icons/spotify.svg" alt="logoSpotify" width="20">
      </a>
    </div>
    <div v-for="(item, index) in songs " :key="index" class="flex gap-x-2 items-center justify-between border-b border-b-slate-700 last:border-b-0 py-2">
      <div class="flex items-center gap-x-4">
        <picture class="rounded-lg overflow-clip">
          <img width="60" :src=item.track.album.images[2].url alt="">
        </picture>
        <p class="font-bold text-white">{{ item.track.name }}</p>
      </div>
        <div class="bg-slate-900 size-12 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors duration-300 cursor-pointer" @click="playSong(item,index)">
          <audio :id="`spotiSong_${index}`" :src=item.track.preview_url></audio>
          <play-icon :is-play="checkProp(index)"></play-icon>
        </div>
      </div>
    </div>
</template>