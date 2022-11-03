   "use strict";

   const app = new Vue({
      // el: '#app',
      data: {

      },
      methods: {
         getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
      }
   }).$mount("#app");

   document.querySelector('.show-post').addEventListener('click', (event) => {
      event.preventDefault;
      document.querySelector('.show-post').classList.add('hidden');
      $('.hidden-text').fadeIn();
   });