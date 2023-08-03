import {computed, reactive} from "vue";

const state = reactive({
    isNavActive: false,
    scrollContentContainer: null
})

export function useEvents() {
    const isNavActive = computed(() => {
        return state.isNavActive
    })

    function setIsNavActive(value) {
        state.isNavActive = value
    }

    const scrollContentContainer = computed(() => {
        return state.scrollContentContainer
    })

    function setScrollContentContainer(value) {
        state.scrollContentContainer = value
    }

    function scrollToTop(container = window) {
        try {
            container.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        } catch (e) {}
    }


    return {
        isNavActive,
        setIsNavActive,
        scrollContentContainer,
        setScrollContentContainer,
        scrollToTop
    }
}