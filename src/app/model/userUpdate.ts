import { Roles } from "./roles";

export interface UsersUpdate {
    id: number;
    idCard: number;
    name: string;
    email: string;
    password: string;
    role?: Roles;
}