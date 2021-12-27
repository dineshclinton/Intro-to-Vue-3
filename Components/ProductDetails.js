app.component('product-details', {
    props: {
        details: {
          type: Array,
          required: true
        }
    },
    template:
        /*html*/
        `<p>Product Details:</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>`        
     ,
    // methods: {
        
    // },
    // computed: {
    //     details() {
    //         return this.details;
    //     }
    // }
})