<template>
  <v-container>
    <OverView class="mb-5"></OverView>
    <GalleryProject></GalleryProject>
  </v-container>
</template>

<script>
  import OverView from '@/components/Overview.vue'
  import GalleryProject from '@/components/GalleryProject.vue'

  export default {
    name: 'HelloWorld',
    components:{
      OverView,GalleryProject
    },
    data: () => ({
      
    }),
  }
</script>
