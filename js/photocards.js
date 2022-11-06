"use strict";

Vue.component('photo', {
    data(){
        return {
            photos: [],
        }
    },
    mounted(){
        this.$parent.getJson(`/catalogData`)
            .then(data => {
                for(let photo of data){
                    this.photos.push(photo);
                }                                    
        });
    },
    template: `
    <div class="portfolio-wrp container">
        <h1 class="portfolio-header">Lorem ipsum dolor sit.</h1>
        <div class="portfolio-mosaic">
        <photocard v-for="photo of photos"
            :key="photo.id"
            :img="photo.img"
            :photo="photo"
        ></photocard>
        </div>
    </div>
    `
});

Vue.component('photocard', {
    props: ['photo', 'img'],
    template: `
        <img class="portfolio-mosaic-preview" :id="photo.id" :src="img" alt="photo" >
    `
});