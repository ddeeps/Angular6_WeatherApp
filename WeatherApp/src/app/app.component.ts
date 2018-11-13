import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDApbQze9GxMwYDIZtBVq-kXntII5DxufY",
      authDomain: "ng-recipe-book-c5b22.firebaseapp.com"
    })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
