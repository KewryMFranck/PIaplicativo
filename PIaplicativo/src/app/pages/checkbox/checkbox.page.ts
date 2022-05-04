import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  mesesDoAno: any[] =[
    { nomeMes: 'janeiro',valor: 1, marcado: false},
    { nomeMes: 'Fevereiro',valor: 2, marcado: true},
    { nomeMes: 'Março',valor: 3, marcado: false},
    { nomeMes: 'Abril',valor: 4, marcado: true},

  ];
  constructor() { }

  ngOnInit() {
  }

  exibirMesesDoAno() {
    console.log(this.mesesDoAno);

  }

}
