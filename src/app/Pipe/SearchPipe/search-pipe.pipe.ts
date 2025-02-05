import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true, 
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) return items;
    searchText = searchText.trim().toLowerCase();
    
    return items.filter(item =>
      item.name.toLowerCase().includes(searchText)
    );
  }
}
