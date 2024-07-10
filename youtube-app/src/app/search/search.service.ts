import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SortOrder } from './search-results/search-results.component';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchTerm = new BehaviorSubject<string>('');
  private sortTerm = new BehaviorSubject<string>('');
  private sortDateOrder = new BehaviorSubject<SortOrder>(SortOrder.ASC);
  private sortCountViewOrder = new BehaviorSubject<SortOrder>(SortOrder.ASC);

  setSearchTerm(term: string): void {
    this.searchTerm.next(term);
  }
  getSearchTerm() {
    console.log('3');
    return this.searchTerm.asObservable();
  }

  setSortTerm(term: string): void {
    this.sortTerm.next(term);
  }
  getSortTerm() {
    return this.sortTerm.asObservable();
  }

  setSortDateOrder(): void {
    if (this.sortDateOrder === new BehaviorSubject<SortOrder>(SortOrder.ASC)) {
      this.sortDateOrder.next(SortOrder.DESC);
    } else {
      this.sortDateOrder.next(SortOrder.ASC);
    }
  }
  getSortDateOrder() {
    return this.sortDateOrder.asObservable();
  }

  setSortCountViewOrder(): void {
    if (
      this.sortCountViewOrder === new BehaviorSubject<SortOrder>(SortOrder.ASC)
    ) {
      this.sortCountViewOrder.next(SortOrder.DESC);
    } else {
      this.sortCountViewOrder.next(SortOrder.ASC);
    }
  }
  getSortCountViewOrder() {
    return this.sortCountViewOrder.asObservable();
  }
}
