import {GetTypes} from '../type/GetTypes';

export interface GetAnimal {
    name: string;
    description: string | null;
    breed: string | null;
    isAdopted: boolean;
    isInFamily: boolean;
    gender: boolean;
    arrivedAt: string;
    birthdate: string | null;
    type: GetTypes;
    image: any;
}
