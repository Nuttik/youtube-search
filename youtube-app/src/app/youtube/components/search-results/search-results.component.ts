import { Component, OnDestroy, OnInit } from '@angular/core';
import { Item } from '../../../core/models/search-item.model';
import { SortService } from '../../../core/services/sort.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as AppAction from './../../../redux/actions';
import {
  selectError,
  selectIsLoading,
  selectYoutubeVideos,
} from '../../../redux/selectors';
import { GlobalState } from '../../../redux/store.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  isFoundFalse: boolean = true;
  isEmptySearch: boolean = true;
  private subscriptionSearchTerm!: Subscription;
  //ngrx
  isLoading$: Observable<boolean> = this.store.select(selectIsLoading);
  videos$: Observable<Item[]> = this.store.select(selectYoutubeVideos);
  error$: Observable<string | null> = this.store.select(selectError);

  constructor(
    private sortService: SortService,
    // eslint-disable-next-line @ngrx/no-typed-global-store
    private store: Store<GlobalState>
  ) {}

  ngOnInit() {
    this.subscriptionSearchTerm = this.sortService.searchTerm$.subscribe(
      (query) => {
        if (query.trim() !== '') {
          this.isEmptySearch = false;
          this.searchVideo(query);
        } else {
          this.isEmptySearch = true;
        }
      }
    );
  }

  searchVideo(query: string): void {
    this.store.dispatch(AppAction.getVideos({ query }));
  }

  trackById(index: number, item: Item): string {
    return typeof item.id === 'string' ? item.id : item.id.videoId;
  }

  ngOnDestroy() {
    this.subscriptionSearchTerm.unsubscribe();
  }
}
