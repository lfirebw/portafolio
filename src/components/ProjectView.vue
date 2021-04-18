<template>
    <section>
        <v-toolbar color="gray lighting-3">
            <v-toolbar-title><router-link to="/" class="v-btn v-btn--is-elevated v-btn--has-bg  theme--light elevation-1 v-size--default primary"><v-icon>mdi-arrow-left-circle</v-icon>&nbsp;Atras</router-link> Proyecto</v-toolbar-title>
            <v-divider vertical class="mx-4"></v-divider>
            <span class="subheading">{{ this.currentProject.title }}</span>
        </v-toolbar>
        <!--START IMAGE VIEW-->
        <div class="text-center">
        <v-dialog v-model="dialog" max-width="1440px" >
            <v-card>
                <v-card-title class="headline grey lighten-2">
                    Project Image
                </v-card-title>

                <v-card-text>
                    <v-row justify="center">
                        <v-img
                        :src="imageModal.src"
                        :lazy-src="imageModal.lazysrc"
                        
                        >
                        <template v-slot:placeholder>
                            <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                            >
                            <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                            ></v-progress-circular>
                            </v-row>
                        </template>
                        </v-img>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>
        </div>
        <!--END IMAGE VIEW-->
        <v-container>
            <v-row>
                <v-col md="4" sm="6">
                    <v-hover>
                        <template v-slot="{hover}">
                            <v-carousel :cycle="!hover" delimiter-icon="mdi-minus" :continuous="true">
                                <v-carousel-item v-for="(image,i) in currentProject.images" :key="i" :src="image">
                                        <v-fade-transition>
                                            <v-overlay
                                                v-if="hover"
                                                absolute
                                                color="#036358"
                                            >
                                                <v-btn @click="showDialog(i)"><v-icon>mdi-magnify-plus-outline</v-icon></v-btn>
                                            </v-overlay>
                                        </v-fade-transition>
                                </v-carousel-item>
                            </v-carousel>
                        </template>
                    </v-hover>
                </v-col>
                <v-col md="8" sm="6">
                    <v-card style="height:100%;">
                        <v-card-title><h1>{{ this.currentProject.title }}</h1></v-card-title>
                        <v-card-text>{{ this.currentProject.description }}</v-card-text>
                        <v-card-actions>
                            <v-row justify="center" v-if="currentProject.links != null">
                                <v-col  v-for="(link,n) in currentProject.links" :key="n" class="text-center">
                                    <v-btn rounded target="_blank" :href="link.href" elevation="1">{{ link.name }}</v-btn>
                                </v-col>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                    
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
// import JSONProjects from '@/assets/projects.json'
export default {
    data(){
        return {
            dialog: false,
            imageModal:{
                src:null,
                lazysrc:null
            },
            currentProject:{
                "title":"",
                "description": "",
                "images":[],
                "links":[]
            },
            JSONProjects: []
        }
    },
    methods:{
        findProject(id){
            const item = this.JSONProjects[id]
            this.currentProject.title = item.title
            this.currentProject.images = item.images
            this.currentProject.description = item.description
            this.currentProject.links = item.links != null ? item.links : null
        },
        showDialog(key=0){
            if(this.currentProject.images != null && Object.keys(this.currentProject.images).length > 0){
                this.imageModal.src = this.currentProject.images[key]
                this.imageModal.lazysrc = this.currentProject.images[key]
                this.dialog = true
            }
        }
    },
    created(){
        // do it
    },
    mounted(){
        this.axios.get(String.prototype.concat(process.env.BASE_URL,"js/projects.json")).then((response) => {
            this.JSONProjects = response.data;
            this.findProject(this.$route.params.id)
        });
    }
}
</script>