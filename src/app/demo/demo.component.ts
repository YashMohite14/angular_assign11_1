import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticService } from '../arithmetic.service';


@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers: [ArithmeticService]
})
export class DemoComponent {

  public addition : any ;
  public subtraction : any;

  constructor(private obj : ArithmeticService){
    this.addition = this.obj.add(5,3);
    this.subtraction = this.obj.sub(10,4);

  }
}
