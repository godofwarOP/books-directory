import { Component, OnInit } from '@angular/core';
import { Book } from 'src/interface/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor(private bookSerivce: BookService) {}

  state = {
    isLoading: true,
    data: <Book[]>[],
    error: '',
  };

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookSerivce.getBooks().subscribe((books) => {
      this.state.data = books;
      this.state.isLoading = false;
    });
  }
}
