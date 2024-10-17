import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchHighlightsAuto'
})
export class SearchHighlightsAutoPipe implements PipeTransform {

  transform(value: string, searchText: string): string {

    if(!searchText){
      console.log(value)

      return value
    }

    const regex = new RegExp(searchText, 'gi')
    const match = value.match(regex)
    console.log(match)

    if(!match){
      console.log(value)
      return value
    }
    console.log(regex)
    return value.replace(regex, `<mark>${match[0]}</mark>`);
  }

}
