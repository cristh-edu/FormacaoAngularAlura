import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css'],
})
export class CartaoComponent implements OnInit {
  @Input() titulo = '';
  @Input() descricao = '';
  @Input() likes = 0;
  @Input() comments = 0;

  constructor() {}

  ngOnInit(): void {}
}
