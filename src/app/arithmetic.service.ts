import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  

  add(a : number =0, b : number =0) : number
  {
    return a + b ; 
  }


  sub(a : number =0, b : number =0) : number
  {
    return a - b; 
  }

}
