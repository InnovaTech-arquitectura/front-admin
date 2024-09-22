import { Functionalities } from "./functionalities";

export interface Planes {
    id: number;
    name: string;
    price: number;
    functionalities: Functionalities[];
}