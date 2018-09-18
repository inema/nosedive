import { Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  person: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8000/person/1/')
      .subscribe(data => {
          console.log(data);
          this.person = data[0];
          this.addPersonFields(this.person);
        });
  }
  addPersonFields(p: any) {
    p.name = p.first_name + ' ' + p.last_name;
    p.ratingMain = p.rating.toFixed(1);
    p.ratingFloat = Math.round((p.rating-p.ratingMain) * 1000.);
  }
}
