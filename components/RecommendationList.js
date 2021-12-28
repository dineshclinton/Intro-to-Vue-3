app.component('recommendation-list',{
    props: {
        recommendations : {
            type: Array,            
            required: true
        }
    },
    template:
    /*html*/
    `<div>
    <h3>Recommendations:</h3>
        <ul>
            <li v-for="(recommendation, index) in recommendations" :key="index">{{recommendation.recommend}} for 
                <br/>
                "{{recommendation.recommendText}}"
            </li>
            
        </ul>
    </div>`
})