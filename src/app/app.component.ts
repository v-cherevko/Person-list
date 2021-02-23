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

  personsFilter: any = [];

  showDetailedCard: boolean = false;

  ngOnInit() {

    if (!localStorage.person) {

      this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(data => this.persons = data);

      setTimeout(() => {
        this.personsFilter = this.persons;
      }, 1000)

    } else {

      this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(data => this.persons = data);
      this.showDetailedCard = true;

      setTimeout(() => {
        this.personsFilter = this.persons;
      }, 1000)

    }

  }

  closeDetailedCard() {
    this.showDetailedCard = false;
  }

  sortAsc() {
    this.personsFilter.sort((a: any, b: any) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
  }

  sortDesc() {
    this.personsFilter.sort((a: any, b: any) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    })
  }

  geoFilter() {
    this.personsFilter = this.persons;
    this.personsFilter = this.personsFilter.filter((person: any) => person.address.geo.lat > 2);
  }

  phoneFilter() {
    this.personsFilter = this.persons;
    this.personsFilter = this.personsFilter.filter((person: any) => person.phone.length <= 12);

  }

  resetFilter() {
    this.personsFilter = this.persons;
  }

}
