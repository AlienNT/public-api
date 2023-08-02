import axios from "axios";

const URL = {
    BASE: 'https://api.publicapis.org/'
}
export function useRequest() {

    async function fetchAPI(url) {
        return axios({
            method: 'GET',
            baseURL:
            URL.BASE,
            url
        });
    }

    return {
        fetchAPI
    }
}