const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            isDiscounted: true,
            inventory: 0,
            onSale: true
        }
    }
})
