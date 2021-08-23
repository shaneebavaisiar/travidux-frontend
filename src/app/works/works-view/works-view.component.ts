import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-view',
  templateUrl: './works-view.component.html',
  styleUrls: ['./works-view.component.css']
})
export class WorksViewComponent implements OnInit {

  constructor() { }
  @Input() ins_work:any

  ngOnInit(): void {
  }

}
