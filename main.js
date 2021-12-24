const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            details: ['50% cotton', '30% wool', '20% polyester'],
            onSale : true,
            selectedIndex: 0,
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index) {
            this.selectedIndex = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product; //+ (this.onSale? ' is on sale' : '')
        },
        image() {
            return this.variants[this.selectedIndex].image;
        },
        inStock() {
            return this.variants[this.selectedIndex].quantity;
        },
        sale() {
            return this.onSale? this.brand + ' ' + this.product + ' is on sale' : '';
        }
    
    }
})
