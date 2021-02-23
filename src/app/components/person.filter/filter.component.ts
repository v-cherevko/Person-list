import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'filter-person',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})

export class PersonFilterComponent {

    @Output() clickSortAsc = new EventEmitter<any>()
    @Output() clickSortDesc = new EventEmitter<any>()
    @Output() clickGeoFilter = new EventEmitter<any>()
    @Output() clickPhoneFilter = new EventEmitter<any>()
    @Output() clickResetFilter = new EventEmitter<any>()

    sortAsc() {
        this.clickSortAsc.emit()
    }

    sortDesc() {
        this.clickSortDesc.emit()
    }

    geoFilter() {
        this.clickGeoFilter.emit()
    }

    phoneFilter() {
        this.clickPhoneFilter.emit()
    }

    resetFilter() {
        this.clickResetFilter.emit()
    }
}