/**
 * Created by Lemon Jenkins on 19.10.2017.
 */
export class Currency {
  name:string;
  img: string;
  reserve:number;


  constructor(name: string, img: string, reserve: number) {
    this.name = name;
    this.img = img;
    this.reserve = reserve;
  }
}
