import { DecimalPipe } from "@angular/common";

export interface car{
    carId:number;
    colorId:number;
    brandId:number;
    modelYear:number;
    dailyPrice:DecimalPipe;
    description:string;
}