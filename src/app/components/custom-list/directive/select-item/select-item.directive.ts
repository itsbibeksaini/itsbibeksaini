import { Directive, HostListener, Input } from '@angular/core';
import { CustomListQuery } from 'src/app/queries';


@Directive({
  selector: '[select-item]'
})
export class SelectItemDirective {

  @Input('select-item') selectedItem!: string
  constructor(private customListQuery: CustomListQuery) { }

  @HostListener("click") click(){
    this.customListQuery.selectItem(this.selectedItem)
  }
  

}
