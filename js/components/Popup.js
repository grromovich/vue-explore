let popupcomp = Vue.component("popup", {
    props: {
        popup: {}
    },
    template:  `<div class="overlay" v-if="popup">
                    <div class="popup">
                        <div class="krest" @click ="$emit('close')">x</div>
                        <div class="popup__container"><h1>йцу</h1></div>
                    </div>
                </div>`
}
)