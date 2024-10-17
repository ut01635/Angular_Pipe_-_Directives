import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphabetOnly]'
})
export class AlphabetOnlyDirective {

  constructor(private el: ElementRef) {}

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const char = String.fromCharCode(event.which);


    const isLetter = (char: string) => char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z';
   
    if (!isLetter(char)) {
      event.preventDefault(); 
    }
  }

}
