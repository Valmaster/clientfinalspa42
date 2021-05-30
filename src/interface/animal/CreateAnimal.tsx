export interface CreateAnimal {
    name: string;
    description: string | null;
    breed: string | null;
    isAdopted: boolean;
    isInFamily: boolean;
    gender: boolean;
    arrivedAt: string;
    birthdate: string | null;
    type: number;
    image: any;
}
