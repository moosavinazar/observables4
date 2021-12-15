import {Component, OnInit} from '@angular/core';
import {fromEvent, map, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {

    fromEvent(document, 'click').pipe(
      map(event => event as MouseEvent),
      tap( i => console.log(i) ),
      map( item => {
        return {
          x: item.offsetX,
          y: item.offsetY
        }
      }),
      tap( i => console.log(i) )
    ).subscribe();

  }

}
