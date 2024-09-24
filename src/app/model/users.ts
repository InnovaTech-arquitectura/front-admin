import { Roles } from './roles';

export interface Users {
    id: number;
    name: string;
    idCard: number;
    email: string;
    password: string;
    role: Roles;
}