import axios from 'axios'

let instance = axios.create({
    baseURL: " http://www.omdbapi.com/?i=tt3896198&apikey=8635d36b",
    timeout: 2500
})


instance.interceptors.request.use((config) => {
    //add auth
    //add header
    console.log(config)
    return config;
}, (error) => {

    return Promise.reject(error);
});


instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

const requests = {
    get: (url, params) =>
        instance.get(url,
            {
                params: params
            })
            .then(res => {
                return res.data
            })
};


const Movies = {
    getByFilterList: (s, type, y) =>
        requests.get('', {s, type, y})

};

export default {
    Movies
}
