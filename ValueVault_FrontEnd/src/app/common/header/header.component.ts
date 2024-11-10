import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchTerm:string='';

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  saveSearchTerm(): void {        
    if (this.searchTerm.trim()) {      
      sessionStorage.setItem('searched-term', this.searchTerm);      
      this.search.emit(this.searchTerm);
    } else {
      sessionStorage.setItem('searched-term', "");      
    }
  }
}
