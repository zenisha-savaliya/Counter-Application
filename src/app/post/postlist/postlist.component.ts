import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/interfaces/post.interface';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss'],
})
export class PostlistComponent implements OnInit {
  public posts$!: Observable<IPost[]>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }
}
