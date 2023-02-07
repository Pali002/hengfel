import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {

  calc!: FormGroup;
  show: any;

constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.calc = this.formBuilder.group({
      radius:['', Validators.required],
      length:['', Validators.required],
      result:['']
    })
  }

  calcButton() {
    this.Calculation();
    this.show = true;
  }
  Calculation() {
    let radius = Number(this.calc.value.radius);
    let lenght = Number(this.calc.value.radius);

    let result = 2 * Math.PI * radius * (radius + lenght);
    this.calc.patchValue({result: result});
  }
}
