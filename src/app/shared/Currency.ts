/**
 * Created by Lemon Jenkins on 19.10.2017.
 */
export class Currency {
  name:string;
  purchaseY:number;
  purchaseP:number;
  purchaseE:number;
  sale:number;
  reserve:number;


  constructor(name: string, purchaseY: number, purchaseP: number, purchaseE: number, sale: number, reserve: number) {
    this.name = name;
    this.purchaseY = purchaseY;
    this.purchaseP = purchaseP;
    this.purchaseE = purchaseE;
    this.sale = sale;
    this.reserve = reserve;
  }
}
