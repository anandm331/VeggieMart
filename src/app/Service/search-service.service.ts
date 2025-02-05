import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private search = new BehaviorSubject<string>(""); 
  searchText$ = this.search.asObservable(); 

  updateSearchText(text: string) {
    this.search.next(text); 
  }
}
