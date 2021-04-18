<template>
    <section>
        <h1 class="text-center my-4">Proyectos</h1>
        <v-row v-if="Object.keys(imageProject).length > 0">
            <v-col v-for="(project,i) in imageProject" :key="i" class="d-flex child-flex" md="3" sm="4">
                <v-hover v-slot="{ hover }">
                    <v-card rounded class="galleryCard">
                        <v-card-text class="p-2">
                            <v-img :src="project.src" :lazy-src="project.lazysrc" aspect-ratio="1"></v-img>
                                <div :class="{'showButton': hover}" class="text-center botonesGallery align-center justify-center">
                                    <router-link :to="project.href" class="v-btn v-btn--is-elevated v-btn--has-bg v-btn--rounded theme--light elevation-1 v-size--default primary">Saber más</router-link>
                                </div>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </section>
</template>
<style>
    .galleryCard{ position: relative; }
    .galleryCard .botonesGallery{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        transition: all 0.2s ease-in;
        display: flex;
        background-color:#052a63a1;
    }
    .galleryCard .botonesGallery.showButton{ display: flex; opacity: 1; }
</style>
<script>
// import JSONProjects from '@/assets/projects.json'
export default {
    data(){
        return{
            imageProject: []
        }
    },
    mounted(){
        this.axios.get(String.prototype.concat(process.env.BASE_URL,"js/projects.json")).then((response) => {
            this.imageProject = response.data;
        });
    }
}
</script>