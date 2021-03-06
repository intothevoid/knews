import { Routes, RouterModule } from '@angular/router';
import { StoriesComponent } from './stories/stories.component';
import { ItemcommentsComponent } from './itemcomments/itemcomments.component';

const routes: Routes = [
  { path: '', redirectTo: 'news/1', pathMatch: 'full' },
  {
    path: 'news/:page',
    component: StoriesComponent,
    data: { storiesType: 'news' },
  },
  {
    path: 'newest/:page',
    component: StoriesComponent,
    data: { storiesType: 'newest' },
  },
  {
    path: 'show/:page',
    component: StoriesComponent,
    data: { storiesType: 'show' },
  },
  {
    path: 'ask/:page',
    component: StoriesComponent,
    data: { storiesType: 'ask' },
  },
  {
    path: 'jobs/:page',
    component: StoriesComponent,
    data: { storiesType: 'jobs' },
  },
  {
    path: 'best/:page',
    component: StoriesComponent,
    data: { storiesType: 'best' },
  },
  { path: 'item/:id', component: ItemcommentsComponent },
];

export const routing = RouterModule.forRoot(routes);
