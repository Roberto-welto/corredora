import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyecto';

  ngOnInit(){
    const firebaseConfig = {
      apiKey: "AIzaSyBW5LZtQbIqIhCtPQAeKLnwCiacrfQ5oa4",
      authDomain: "polizas-5dd89.firebaseapp.com",
      databaseURL: "https://polizas-5dd89.firebaseio.com",
      projectId: "polizas-5dd89",
      storageBucket: "polizas-5dd89.appspot.com",
      messagingSenderId: "105087922105",
      appId: "1:105087922105:web:bb59656101d6f6352ad068"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
