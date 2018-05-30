import vueKeyboards from "./vueKeyboards.vue"

const Keyboards = {
    install(Vue,options){
        Vue.component(vueKeyboards.name,vueKeyboards)
    }
}

if(typeof window !== "undefined" && window.Vue){
    window.Vue.use(Keyboards)
}

export default Keyboards