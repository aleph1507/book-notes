import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class FirebaseService {

  books: Observable<any[]>
  favoriteBooks: Observable<any>;
  unreadBooks: Observable<any>;
  bookDetails: Observable<any>;

  constructor(private db: AngularFireDatabase) { }

  getBooks(){
    this.books = this.db.list('/books').valueChanges();
    return this.books;
  }

  getFavoriteBooks(){
    this.favoriteBooks = this.db.list('/books').valueChanges().map(books => {
      const topRatedBooks = books.filter(item => item.rate > 4);
      return topRatedBooks;
    });
    return this.favoriteBooks;
  }

  getUnreadBooks(){
    this.unreadBooks = this.db.list('/books').valueChanges().map(books =>{
      const ub = books.filter(item => item.dateread == null);
      return ub;
    });
    return this.unreadBooks;
  }

  getBookDetails(id){
    this.bookDetails = this.db.object('/books'+id).valueChanges();
    return this.bookDetails;
  }

}
