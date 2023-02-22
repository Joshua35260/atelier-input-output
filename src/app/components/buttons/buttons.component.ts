import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input() color?: string;
  @Input() name?: any;
  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

  usedColors: string[] = [];
  usedNames: string[] = [];
  clickedButtons: string[] = [];

  randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    do {
      color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
    } while (this.usedColors.includes(color));
    this.usedColors.push(color);
    return color;
  }

  onClick() {
    if (!this.usedNames.includes(this.name)) {
      this.usedNames.push(this.name);
    }
    this.color = this.randomColor();
    this.buttonClick.emit(this.name + ' a été cliqué');
  }
  

  constructor() { }

  ngOnInit() {
  }

}
