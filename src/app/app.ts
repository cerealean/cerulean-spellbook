import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cerulean-spellbook');
  
  // Book state
  protected isBookOpen = false;
  protected currentPage = 0;
  protected maxPages = 2;
  
  protected openBook(): void {
    this.isBookOpen = true;
  }
  
  protected closeBook(): void {
    this.isBookOpen = false;
    this.currentPage = 0;
  }
  
  protected nextPage(): void {
    if (this.currentPage < this.maxPages - 1) {
      this.currentPage++;
    }
  }
}
