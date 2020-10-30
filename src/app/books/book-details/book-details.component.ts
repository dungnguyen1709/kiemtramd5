import { Component, OnInit } from '@angular/core';
import {Books} from '../../books';
import {ActivatedRoute, Route} from '@angular/router';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Books;

  constructor(private route: ActivatedRoute,
              private bookService: BookService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')  ;
    this.bookService.getBook(id).subscribe(
      next => (this.book = next),
        error => {
      console.log(error);
      this.book = null;
    });
  }

}
