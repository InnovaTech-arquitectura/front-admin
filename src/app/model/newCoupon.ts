export interface NewCoupon {
    id?: number; // Opcional porque no siempre lo envías
    description: string;
    expirationDate: string;
    expirationPeriod: number;
    entrepreneurshipId: number;
    plan?: number; // Opcional porque no siempre lo envías
    planId?: number; // Opcional porque no siempre lo envías
    functionalityIds: number[];
}