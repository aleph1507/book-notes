import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  favoriteBooks: any;
  unreadBooks: any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getFavoriteBooks()
      .subscribe(favBooks =>{
        this.favoriteBooks = favBooks;
        console.log(favBooks);
      });

    this.firebaseService.getUnreadBooks()
      .subscribe(ubBooks =>{
        this.unreadBooks = ubBooks;
        console.log('unread: ',this.unreadBooks);
      })
  }

}
