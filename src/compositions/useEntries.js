import {computed, reactive} from "vue";
import {useRequest} from "./useRequest.js";

const state = reactive({
    entries: [],
    filter: '',
    showCount: 12,
    status: null
})
const {fetchAPI} = useRequest()

export function useEntries() {
    const entries = computed(() => {
        return filter.value?.trim() ?
            paginate(filterArray(state.entries, 'Category', filter.value)) :
            paginate(state.entries)

    })

    function paginate(array, perPage = showCount.value) {
        return array.slice(0, perPage)
    }

    function filterArray(array, field = 'Category', value) {
        return array?.filter(item => item[field] === value)
    }

    const entriesByCategory = computed((category) => {
        return state.entries.filter(entry => entry['Category'] === category)
    })

    const entryRequestStatus = computed(() => {
        return state.status
    })

    function setEntries(data) {
        state.entries = data
    }

    function setEntryRequestStatus(status) {
        state.status = status
    }

    async function fetchEntries() {
        const response = await fetchAPI('/entries')

        const {data, status} = response

        if (data && status === 200) {
            setEntries(data.entries)
        }
        setEntryRequestStatus(status)

        return response
    }

    const filter = computed(() => {
        return state.filter
    })

    function setFilter(filter) {
        state.filter = filter
    }

    const showCount = computed(() => {
        return state.showCount
    })

    function setShowCount(value) {
        state.showCount = value
    }

    return {
        entries,
        entriesByCategory,
        entryRequestStatus,
        fetchEntries,
        filter,
        setFilter,
        showCount,
        setShowCount
    }
}