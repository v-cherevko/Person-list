import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../person.card/person.card';

@Component({
    selector: 'person-detailedCard',
    templateUrl: './person.detailed.card.component.html',
    styleUrls: ['./person.detailed.card.component.scss']
})

export class PersonDetailedComponent implements OnInit {

    @Input() person: Person;
    @Output() close = new EventEmitter<any>();

    ngOnInit() {

        if (localStorage.person) {
            this.person = JSON.parse(localStorage.getItem('person') || '{}');
        }

    }

    closeModalWindow() {
        localStorage.clear();
        this.close.emit();
    }
}