<template>
    <section class="overview row align-center justify-center text-center mb-0 black white--text">
        <div class="col-md-8 index-1 py-5">
            <h1>Visión general</h1>
            <p>Ingeniero de Sistemas y desarrollador web, me dedico desde hace mucho tiempo en la creación de soluciones web, desde paginas web simples hasta aplicaciones a medida a diversas empresas.</p>
            <p>Cada trabajo realizado se aplica la profesionalidad de mi perfil y la dedicación para lograr los objetivos esperados por los clientes.</p>
            <VueSlickCarousel v-bind="settingSlickIcons">
                <div class="row justify-center flexForced" v-for="(group,i) in iconGroup" :key="i">
                    <div class="col-md-2 col" v-for="(icon,n) in imageSkill.slice(i*imageSkillPerRow,(i+1) * imageSkillPerRow)" :key="n">
                        <v-card  rounded>
                            <v-card-text align="center">
                                <v-img contain max-width="60" max-height="55" :lazy-src="icon.src" :src="icon.src"></v-img>
                            </v-card-text>
                            <v-card-actions class="text-subtitle-2 justify-center">
                                <p class="mb-0">{{ icon.title }}</p>
                            </v-card-actions>
                        </v-card>
                    </div>
                </div>
            </VueSlickCarousel>
            <v-row class="my-5">
                <v-col  >
                    <v-btn elevation="1" rounded color="primary" >
                        Contactar
                    </v-btn>
                </v-col>
                <v-col>
                    <v-btn href="https://emmyseco.com/" target="_blank" elevation="1" rounded color="info">
                        Visitar mi Web
                    </v-btn>
                </v-col>
            </v-row>
        </div>
    </section>
</template>
<style>
    .overview{
        position: relative;
        min-height: 350px;
        z-index: 1;
    }
    .flexForced{ display:flex!important; }
    .overview::before{
        content:'';
        position: absolute;
        width: 100%;
        height:100%;
        background: url(https://emmyseco.com/wp-content/uploads/2021/01/jobimagen03.jpg);
        background-size: cover;
        background-position: center;
        opacity: 0.5;
        z-index: 0;
    }
    .overview .v-card { box-shadow: none; background-color:rgba(255, 255, 255, 0.5)!important; transition: all 0.15s ease-in-out; }
    .overview .v-card .v-card__text { height:65px; }
    .overview .v-card:hover{
        box-shadow: rgba(4, 63, 97, 0.5) 2px 2px 5px 1px!important; background-color:rgba(255, 255, 255, 1)!important;
    }
    .index-1{ z-index: 1; }
</style>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css' // optional style for arrows & dots

export default {
    components: { VueSlickCarousel },
    data(){
        return {
            imageSkillPerRow: 3,
            imageSkill:[
                {title:"Javascript", src: "https://api.briantastic.com/assets/icons/Group-1.svg"},
                {title:"Vue JS", src: "https://cdn.worldvectorlogo.com/logos/vue-js-1.svg"},
                {title:"C#", src: "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"},
                {title:"HTML5", src: "https://api.briantastic.com/assets/icons/HTML5_logo_and_wordmark.svg"},
                {title:"PHP", src: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"},
                {title:"MySQL", src: "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg"},
            ],
            settingSlickIcons:{
                "dots": true,
                "focusOnSelect": true,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "autoplay": true,
                "autoplaySpeed": 2000,
                "cssEase": "linear",
                // "touchThreshold": 5
                
            }
        }
    },
    computed:{
        iconGroup(){
            return Array.from(Array(Math.ceil(this.imageSkill.length / this.imageSkillPerRow)).keys())
        }
    }
}
</script>