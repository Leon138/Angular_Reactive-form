import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../reactive-form/interfaces/form.interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() public objItem!: ITask;

  constructor() {}

  ngOnInit(): void {}
}
