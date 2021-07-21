import { Component, OnInit } from '@angular/core';
import { CalculatorServices } from './calculator.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CalculatorServices]
})
export class AppComponent implements OnInit{
  title = 'calculator';
  //button = document.getElementById("num1");
  result: number = 0;
  constructor(public calculatorService: CalculatorServices){
  }
  ngOnInit(){
this.result = this.calculatorService.result;
  }


}
