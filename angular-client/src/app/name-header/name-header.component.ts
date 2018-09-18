import { Component, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'name-header',
  templateUrl: './name-header.component.html',
  styleUrls: ['./name-header.component.css']
})
export class NameHeaderComponent {

  @Input() person: any;
}
