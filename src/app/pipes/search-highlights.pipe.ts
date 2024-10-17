import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchHighlights'
})
export class SearchHighlightsPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const search = args[0]

    if(!search){
      return value
    }

    const SplitSentence : string[]  = value.split(search) 

    let FilertPara = SplitSentence.map((sentence:any, index :any)=> {
      if (index > 0) {
        return SplitSentence[0] + `<mark>${search[0]}</mark>` + sentence;
      }
      else{
        return value
      }
    })
    return FilertPara.join(' ')
  }
}
