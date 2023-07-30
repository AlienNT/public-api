import {computed, reactive} from "vue";

const state = reactive({
    categories: [],
    apiList: [],
    isAlive: null,
})

export function useState() {

    const categories = computed(() => {
        return state.categories
    })

    function setCategories(categories) {
        state.categories = categories
    }

    const apiList = computed(() => {
        return state.apiList
    })

    function setApiList(list) {
        state.apiList = list
    }

    const isAlive = computed(() => {
        return state.isAlive
    })
    return {}
}