import axios from 'axios';
import {ENDPOINTS} from "@/config/endpoints";

export const lendingData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {data: res} = await axios.post(ENDPOINTS.getInTouch, data);
            if (res.status === 200)
                resolve(res.data)
            else
                reject(res.message)
        } catch (error) {
            console.error('Errore durante il caricamento dei token:', error);
            reject(error.message);
        }
    })
}