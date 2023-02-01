import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.css']
})
export class InputtextComponent implements OnInit {

  constructor() { }
  value = 'Clear me';

  ngOnInit(): void {
  }

}
