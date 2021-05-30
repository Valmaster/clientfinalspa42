import axios from 'axios';
import {GetAnimal} from '../interface/animal/Animal';
import {CreateAnimal} from '../interface/animal/CreateAnimal';

function getAll(): Promise<GetAnimal[] | string> {
    return axios.get('http://localhost:3000/animals')
        .then(({data}) => {
            return data;
        })
        .catch((e) => {
            return e;
        })
}

function create(animal: CreateAnimal): Promise<GetAnimal | string> {
    let bodyFormData = new FormData();
    for (const [key, value] of Object.entries(animal)) {
        bodyFormData.append(key, value);
    }
    console.log(bodyFormData);

    return axios({
        method: 'post',
        url: 'http://localhost:3000/animals',
        data: bodyFormData,
        headers: {'Content-Type': 'multipart/form-data'},
    }).then(async ({data}) => {
        console.log(data);
        return data;
    })
        .catch((error) => {
            console.log(error.response);
            return 'error';
        });
}

export default {
    getAll,
    create,
};
