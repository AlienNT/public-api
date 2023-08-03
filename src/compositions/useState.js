import {computed, reactive} from "vue";
import {useRequest} from "./useRequest.js";

const state = reactive({
    categories: [],
    apiList: [],
    isAlive: null,
})
const {fetchAPI} = useRequest()

export function useState() {

    const categories = computed(() => {
        return state.categories
    })

    function setCategories(categories) {
        state.categories = categories
    }

    async function fetchCategories() {
        const {data, status} = await fetchAPI('/categories')

        if (data && status === 200) {
            setCategories(data?.categories)
        }
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

    function setIsAlive(status) {
        state.isAlive = status
    }

    return {
        categories,
        setCategories,
        fetchCategories,
        apiList,
        setApiList,
        isAlive,
        setIsAlive
    }
}