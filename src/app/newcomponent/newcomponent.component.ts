import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent implements OnInit {

  constructor() { }

  name: string = " ahmed ";
  
  ngOnInit(): void {
            

  }

}
