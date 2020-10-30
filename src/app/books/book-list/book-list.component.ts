import {Component, OnInit} from '@angular/core';
import {Books} from '../../books';
import {BookService} from '../../services/book.service';
import {FormBuilder} from '@angular/forms';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Books[] = [];

  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private routes: Router) {
  }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(next => (this.bookList = next),
      error => (this.bookList = []));
  }

  deleteBook(id: number) {
    if (confirm('Are you sure?')) {

      return this.bookService.delete(id)
        .subscribe(() => {
          this.bookList = this.bookList.filter(t => t.id !== id);
        });
    }


  }

}
