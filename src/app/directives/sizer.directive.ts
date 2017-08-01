import { Directive,HostBinding,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[sizer]'
})
export class SizerDirective {
@Input()
@HostBinding('style.background-color')
size:string;
@HostBinding('style.border')
border:string;
@HostBinding('style.font-size')
ftsize:string;
@HostBinding('style.margin-top')
mrgn:string;
@HostListener('mouseenter')
onEnter(){
this.size='cornflowerblue';
this.border='2px solid cornflowerblue';
this.ftsize='20px';
this.mrgn='-25px'
}
@HostListener('mouseleave')
onexit(){
this.size='darkgray';
this.border='0px';
this.ftsize='15px';
this.mrgn='0px';

}
  constructor() { }

}
