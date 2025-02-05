import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../Service/search-service.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = "VeggieMart";
  searchService = inject(SearchService); 

  searchText = ""; 
  updateSearch() {
    this.searchService.updateSearchText(this.searchText);
  }
}
