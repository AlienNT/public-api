import {computed, reactive} from "vue";
import {useRequest} from "./useRequest.js";

const {fetchAPI} = useRequest()
const state = reactive({
    isAlive: null
})

export function useApiHealth() {

    const isAlive = computed(() => {
        return state.isAlive
    })

    function setIsAlive(value) {
        state.isAlive = value
    }

    async function fetchApiHealth() {
        try {
            const {alive} = await fetchAPI('/health')

            setIsAlive(alive)
        } catch (e) {}
    }

    return {
        isAlive,
        fetchApiHealth
    }
}