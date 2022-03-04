import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explain-accordion',
  templateUrl: './explain-accordion.component.html',
  styleUrls: ['./explain-accordion.component.css']
})
export class ExplainAccordionComponent implements OnInit {
  @Input() message: string = '';
  @Input() moreInfo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
