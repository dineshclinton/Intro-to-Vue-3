app.component('recommendation-record',{
    template:
    /*html*/
    `<form @submit.prevent="onSubmit">
        <p><i>Would you recommend this product?</i></p>
        <input type="radio" id="recommend_yes" name="recommend" value="yes" v-model="recommend"/>
        <label for="recommend_yes">Yes</label>
        <input type="radio" id="recommend_no" name="recommend" value="no" v-model="recommend"/>
        <label for="recommend_no">No</label><br/>
        <label for="recommedReason">Reason:</label>
        <textarea id="recommedReason" v-model="recommendText"></textarea>

        <input class="button" type="submit" value="Submit"/>
    </form>`,
    data() {
        return {
            recommend: '',
            recommendText: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.recommend === '' || this.recommendText === '') {
                alert('Recommendation is incomplete. Please fill out all the fields');
                return
            }
            let productRecommend = {
                recommend: this.recommend,
                recommendText: this.recommendText
            }

            this.$emit('recommend-submitted', productRecommend);
            this.initProductRecommend();
        },
        initProductRecommend (){
            this.recommend = '';
            this.recommendText = '';
        }
    }
})