import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private http: HttpClient) { }

  persons: any = [];

  showDetailedCard: boolean = false

  ngOnInit() {

    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(data => this.persons = data);

  }

  closeDetailedCard() {
    this.showDetailedCard = false
  }

}
