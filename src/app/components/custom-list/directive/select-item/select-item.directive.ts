import { Directive, HostListener, Input } from '@angular/core';
import { ProjectSelectorService } from 'src/app/components/projects/services';
import { CustomListQuery } from 'src/app/queries';
import { CustomListStore } from 'src/app/stores';


@Directive({
  selector: '[select-item]'
})
export class SelectItemDirective {

  @Input('select-item') selectedItem!: string
  constructor(private customListService:CustomListStore, private projectSelector:ProjectSelectorService) { }

  @HostListener("click") click(){
    this.customListService.selectItem(this.selectedItem)    
    this.projectSelector.selectProject(this.selectedItem)
  }
  

}
