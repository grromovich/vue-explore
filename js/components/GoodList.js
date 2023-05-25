let goodList = Vue.component("good-list",{
    props: {
        goodlist: {}
    },
    template: `<div><div class="good" v-for="good in goodlist">
                    <div class="good__container" >
                        <img :src="good['images']" alt="">
                        <h3 class="title" @click ="$emit('open')">{{good['name']}}</h3>
                        <div class="price">{{good['price']}}$</div>
                    </div>
                </div>
                </div>`
})