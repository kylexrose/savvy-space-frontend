import axios from 'axios'

const Axios = axios.create({
    baseURL: "savvyspace.kylexrose.com/api",
    timeout: 50000,
    })

export default Axios;