import { Component, Input } from '@angular/core';

export interface Person {
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
    }
    geo: {
        lat: number
        lng: number
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

@Component({
    selector: 'person-card',
    templateUrl: './person.card.component.html',
    styleUrls: ['./person.card.component.scss']
})

export class PersonCardComponent {
    @Input() person: Person
}