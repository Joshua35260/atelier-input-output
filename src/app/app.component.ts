import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atelier-input-output';
  colors = ['red', 'green', 'blue', 'orange', 'transparent'];
  selectedColors: string[] = [];
  allButtonsClicked = false;
  clickedButtons: string[] = [];
  message: string = '';

  onButtonClick(buttonName: string) {
    if (!this.clickedButtons.includes(buttonName)) {
      this.clickedButtons.push(buttonName);
      console.log(buttonName + ' a été cliqué');
      this.message = buttonName + ' a été cliqué';
    }
    if (this.clickedButtons.length === this.colors.length) {
      this.allButtonsClicked = true;
      console.log('Tous les boutons ont été cliqués');
      this.message = 'Tous les boutons ont été cliqués';
    }
  }

 changeColor(index: number, value: string | null) {
  if (value) {
    this.selectedColors[index] = value;
  }
}

  
}
