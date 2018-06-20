import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
  	public navCtrl: NavController, 
  	public restProvider: RestProvider,
    private launchNavigator: LaunchNavigator ) { this.getPassengers(); }
  passengers: any;
  getPassengers() {
    this.restProvider.getPassengers()
    .then(data => {
      this.passengers = data;
      console.log(this.passengers);
    });
  }
  nextTrip(id) {
    this.restProvider.nextTrip(this.passengers)
      .then((result) => {
        this.passengers = result;
      }, (err) => {
      console.log(err);
    });
  }
}
