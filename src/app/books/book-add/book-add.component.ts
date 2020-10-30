import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../services/book.service';
import {Router, Routes} from '@angular/router';
import {Books} from '../../books';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private bookService: BookService,
              private routes: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  // addBook() {
  //   if (this.bookForm.valid) {
  //     let data =  this.bookForm.value;
  //     this.bookService.add(data).subscribe(next => {
  //       this.bookForm.reset({
  //         title: '',
  //         author: '',
  //         description: '',
  //       });
  //     }, error => console.log(error));
  //   }
  // }

  onSubmit(): void {
    const data: Books = this.bookForm.value;
    console.log(this.bookForm.value);
    this.bookService.add(data).subscribe(() =>
    this.routes.navigate(['']));
  }

}
