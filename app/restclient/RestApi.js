import axios from 'axios'

export default class RestApi {
    instance = null
    instancedevRider = null

    constructor() {

        this.instance = axios.create({
            baseURL: `https://api.spacexdata.com/v3/`,
            timeout: 50000,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
    }

    static getInstance() {
        if (this.instance == null) {
            this.instance = axios.create({
                baseURL: `https://api.spacexdata.com/v3/`,
                timeout: 50000,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
        }
        return this.instance
    }

}
