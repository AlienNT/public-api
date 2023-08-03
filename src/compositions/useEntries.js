import {computed, reactive} from "vue";
import {useRequest} from "./useRequest.js";

const state = reactive({
    entries: [],
    entryFields: [],
    filter: '',
    entriesFilters: {},
    showCount: 12,
    status: null
})
const {fetchAPI} = useRequest()

export function useEntries() {
    const filter = computed(() => {
        return state.filter
    })

    function setFilter(filter) {
        state.filter = filter
    }

    const entries = computed(() => {
        return state.entries

    })
    const filteredEntries = computed(() => {
        return filterByCategory(state.entries, filter.value)

    })

    function filterByCategory(array, filter) {
        return filter?.trim() ?
            paginate(filterByFields(filterArray(array, 'Category', filter))) :
            paginate(filterByFields(array))
    }

    function filterByFields(array, filters = entriesFilters.value) {
        const keys = Object.keys(filters)
        let res = array

        if (keys?.length) {
            keys.forEach(key => {
                res = filterArray(res, key, filters[key])
            })
        }
        return res
    }

    function paginate(array, perPage = showCount.value) {
        return array?.slice(0, perPage)
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
            setEntries(data.entries.map(entry => {
                return {
                    ...entry,
                    Cors: entry['Cors'] === 'yes'
                }
            }))
            setEntryFields(Object.keys(data.entries[0]))
        }
        setEntryRequestStatus(status)

        return response
    }

    const showCount = computed(() => {
        return state.showCount
    })

    function setShowCount(value) {
        state.showCount = value
    }

    const entryFields = computed(() => {
        return state.entryFields
    })

    function setEntryFields(fields) {
        state.entryFields = fields
    }

    const entriesFilters = computed(() => {
        return state.entriesFilters
    })

    function setEntriesFilters(filter, value) {
        switch (value) {
            case true:
            case false:
                return state.entriesFilters[filter] = value;
            case null:
            case undefined:
                return delete state.entriesFilters[filter]
        }
    }

    return {
        entries,
        filteredEntries,
        entriesByCategory,
        entryRequestStatus,
        fetchEntries,
        filter,
        setFilter,
        showCount,
        setShowCount,
        entryFields,
        entriesFilters,
        setEntriesFilters
    }
}