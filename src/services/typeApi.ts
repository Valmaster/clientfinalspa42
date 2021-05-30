import axios from 'axios';
import {GetTypes} from "../interface/type/GetTypes";

export const getAll = (): Promise<GetTypes[] | string> => {
    return axios.get<GetTypes[]>('http://localhost:3000/types')
        .then(({data}) => data)
        .catch((error) => 'error');
}
