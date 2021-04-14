import { Directive, HostListener, Input } from '@angular/core';
import { ProjectSelectorService } from 'src/app/components/projects/services';
import { CustomListStore } from '../../state/custom-list-store';


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
