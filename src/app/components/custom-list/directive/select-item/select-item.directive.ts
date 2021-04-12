import { Directive, HostListener, Input } from '@angular/core';
import { ProjectSelectorService } from 'src/app/components/projects/services';
import { CustomListQuery } from 'src/app/queries';


@Directive({
  selector: '[select-item]'
})
export class SelectItemDirective {

  @Input('select-item') selectedItem!: string
  constructor(private customListQuery: CustomListQuery, private projectSelector:ProjectSelectorService) { }

  @HostListener("click") click(){
    this.customListQuery.selectItem(this.selectedItem)    
    this.projectSelector.selectProject(this.selectedItem)
  }
  

}
