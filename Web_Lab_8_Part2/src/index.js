import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap } from 'rxjs/operators';

const showBtn = document.getElementById('showBtn')
const deleteBtn = document.getElementById('deleteBtn')
const dataTable = document.getElementById('dataTable')

fromEvent(showBtn, 'click')
    .pipe(
        switchMap(() => ajax.getJSON('/files/demo.json')),
        map(data => data)
    )
    .subscribe(data => {
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                let row = document.createElement('tr')
                let name = document.createElement('td')
                name.innerHTML = key
                let description = document.createElement('td')
                description.innerHTML = data[key]
                row.appendChild(name)
                row.appendChild(description)
                dataTable.appendChild(row)
            }
        }
    })

fromEvent(deleteBtn, 'click')
    .pipe(
        map(() => dataTable.lastChild),
        map(child => {
            if (child instanceof HTMLTableRowElement) {
                dataTable.removeChild(child)
            }
        })
    )
    .subscribe()