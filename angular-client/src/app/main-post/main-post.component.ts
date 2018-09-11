import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-post',
  templateUrl: './main-post.component.html',
  styleUrls: ['./main-post.component.css']
})
export class MainPostComponent implements OnInit {

  @Input() person: any;
  constructor() { }

  ngOnInit() {
  }

}
