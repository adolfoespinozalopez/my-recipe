export type CustomerType = 'new' | 'Regular' | 'vip' | boolean;
export type Category = 'entrance' | 'main' | 'dessert';
export interface Customer{
    name: string;
    level: CustomerType;
}
