Vue.component('photocards', {
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
        <photocard v-for="photocard of photos"
            :img="photos.img"
        ></photocard>
        </div>
    </div>
    `
});

Vue.component('photocard', {
    props: ['img'],
    template: `
        <img class="portfolio-mosaic-preview" :src="img" alt="photo">
    `
});