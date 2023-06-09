import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles:[
  `
  .bi-star{
    color:green;
  }

  `]
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean=false;
  @Output('change') click= new EventEmitter()
  onClick() {
    this.isSelected = !this.isSelected;
this.click.emit({newValue:this.isSelected})
  }
}

export interface FavoriteChangedEventArgs {
  newValue:boolean
}

