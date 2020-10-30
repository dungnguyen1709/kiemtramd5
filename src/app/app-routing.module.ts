import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './books/book-list/book-list.component';
import {BookAddComponent} from './books/book-add/book-add.component';
import {BookEditComponent} from './books/book-edit/book-edit.component';
import {BookDetailsComponent} from './books/book-details/book-details.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'add',
    component: BookAddComponent,
  },
  {
    path: ':id',
    component: BookEditComponent,
  },
  {
    path: 'detail/:id',
    component: BookDetailsComponent,
  }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
