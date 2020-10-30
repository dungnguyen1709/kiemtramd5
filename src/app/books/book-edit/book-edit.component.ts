import {Component, OnInit} from '@angular/core';
import {Books} from '../../books';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../services/book.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id: number;
  books: Books;
  updateBooks: any;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private bookService: BookService) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.bookService.getBook(this.id = +params.get('id')))
    ).subscribe(value => {
      this.books = value;
      this.updateBooks.patchValue(this.books);
    });

    this.updateBooks = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
    });

  }

  onSubmit(): void {
    const data: Books = this.updateBooks.value;
    this.bookService.update(this.id, data).subscribe(() =>
    this.router.navigate(['']));
  }

}
