export interface NewCoupon {
    description: string;
    expirationDate: string;
    expirationPeriod: number;
    entrepreneurshipId: number;
    plan?: number; // Opcional porque puede que no siempre lo envíes
    functionalityIds: number[];
}