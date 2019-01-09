import TxLoading from './tx-vue-loading.vue'
const txLoading = {
    install: function(Vue, options) {
        Vue.component(TxLoading.name, TxLoading);
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(txLoading);
}

export default txLoading;