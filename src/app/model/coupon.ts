import { Functionalities } from "./functionalities";
import { Planes } from "./planes";

export interface Coupon {
	id: number;
	description: string;
	expirationDate: Date;
	expirationPeriod: number;
	entrepreneurship?: any; // Cambiar any por el tipo correcto
	plan?: Planes;
	couponFunctionalities?: Functionalities[];
	functionalities?: Functionalities[];
}
