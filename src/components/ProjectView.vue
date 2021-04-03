<template>
    <section>
        <v-toolbar color="gray lighting-3">
            <v-toolbar-title><router-link to="/" class="v-btn v-btn--is-elevated v-btn--has-bg  theme--light elevation-1 v-size--default primary"><v-icon>mdi-arrow-left-circle</v-icon>&nbsp;Atras</router-link> Proyecto</v-toolbar-title>
            <v-divider vertical class="mx-4"></v-divider>
            <span class="subheading">{{ this.currentProject.title }}</span>
        </v-toolbar>
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
                                                <v-btn><v-icon>mdi-magnify-plus-outline</v-icon></v-btn>
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
                            <v-row justify="center">
                                <v-col v-for="link in currentProject.links" :key="link" class="text-center">
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
import JSONProjects from '@/assets/projects.json'
export default {
    data(){
        return {
            currentProject:{
                "title":"",
                "description": "",
                "images":[],
                "links":[]
            }
        }
    },
    methods:{
        findProject(id){
            const item = JSONProjects[id]
            this.currentProject.title = item.title
            this.currentProject.images = item.images
            this.currentProject.description = item.description
            this.currentProject.links = item.links
        }
    },
    created(){
        this.findProject(this.$route.params.id)
    }
}
</script>