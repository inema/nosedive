import { Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  person;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8000/person/1/')
      .subscribe(data => {
    console.log(data);
    this.person = data[0];
    this.person.name = this.person.first_name + ' ' + this.person.last_name;
    this.person.ratingMain = data[0]['rating'].toFixed(1);
    this.person.ratingFloat = Math.round((data[0]['rating']-this.person.ratingMain) * 1000.);
  );
  }
}
