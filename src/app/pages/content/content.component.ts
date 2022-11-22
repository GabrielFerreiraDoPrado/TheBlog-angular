import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://images5.alphacoders.com/125/1251021.jpg";
  contentTitle:string = "NOTICIA EXEMPLO";
  contentDescription:string = "ola mundo";

  constructor() { }

  ngOnInit(): void {
  }

}
