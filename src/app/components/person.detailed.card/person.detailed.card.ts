import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../person.card/person.card';

@Component({
    selector: 'person-detailedCard',
    templateUrl: './person.detailed.card.component.html',
    styleUrls: ['./person.detailed.card.component.scss']
})

export class PersonDetailedComponent {

    @Input() person: Person;
    @Output() close = new EventEmitter<any>()

    onClick() {
        this.close.emit()
    }
}