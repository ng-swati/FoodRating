import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit,OnChanges {
  constructor() { }
  ngOnInit(): void {
  }

@Input() rating:number = 0
@Output() toParent=new EventEmitter<number>()
starWidth:number = 0
ngOnChanges(changes: SimpleChanges): void {
  this.starWidth = 16*this.rating
}
passToParent()
{
this.toParent.emit(this.rating)
}
}
