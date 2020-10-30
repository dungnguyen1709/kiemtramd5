import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Books} from '../books';


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Books[]> {
    return this.http.get<Books[]>(API_URL + 'books');
  }

  add(book: Books): Observable<Books> {
    return this.http.post<any>(API_URL + 'books', book);
  }

  getBook(id: number): Observable<Books> {
    return this.http.get<Books>(API_URL + 'books/' + id);
  }

  update(id: number, book: Books): Observable<Books> {
    return this.http.put<Books>(API_URL + 'books/' + id, book);
  }

  delete(id: number) {
    return this.http.delete<any>(API_URL + 'books/' + id);
  }
}
