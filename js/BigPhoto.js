Vue.component('bigphoto', {
    data(){
        return {
            bigphotos: [],
            img: 'img/bigphoto/portfolio-ph-02.jpg',
        }
    },
    mounted(){
        this.$parent.getJson(`/photos`)
            .then(data => {
                for(let photo of data){
                    this.bigphotos.push(photo);
                }                                    
        });
    },
    methods: {
        closeWindow(){
            document.getElementById('bigphoto').style.display = 'none';
        },
    },
    props: [],
    template: `
    <div id="bigphoto" class="portfolio-mosaic-item">    
        <img :src=bigphotos[2].img alt="portfolio-img" class="portfolio-mosaic-img">
        <div class="portfolio-mosaic-img-close-button">
            <svg @click="closeWindow()" width="30" height="30" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" />
            <path d="M4.64645 4.64645C4.84171 4.45118 5.15829 4.45118 5.35355 4.64645L8 7.29289L10.6464 4.64645C10.8417 4.45118 11.1583 4.45118 11.3536 4.64645C11.5488 4.84171 11.5488 5.15829 11.3536 5.35355L8.70711 8L11.3536 10.6464C11.5488 10.8417 11.5488 11.1583 11.3536 11.3536C11.1583 11.5488 10.8417 11.5488 10.6464 11.3536L8 8.70711L5.35355 11.3536C5.15829 11.5488 4.84171 11.5488 4.64645 11.3536C4.45118 11.1583 4.45118 10.8417 4.64645 10.6464L7.29289 8L4.64645 5.35355C4.45118 5.15829 4.45118 4.84171 4.64645 4.64645Z" />
            </svg>
        </div>
    </div>
    `
});