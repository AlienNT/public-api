import {createStore} from "vuex"
import categories from "./categories/index.js";

const store = createStore({
    modules: {
        categories
    }
})
export default store