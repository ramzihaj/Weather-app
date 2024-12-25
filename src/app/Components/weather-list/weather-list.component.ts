import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-weather-list',
  imports: [],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.css'
})
export class WeatherListComponent {
weatherList: any[] =[
  {city : 'New York', temperture : 20},
  {city : 'Tunis', temperture : 30},
  {city : 'Tokyo', temperture : 9}
];
constructor(private router: Router)
{

}

navigateToWeather(temperture:number)
{
  this.router.navigate(['/weather'], {queryParams: {temperture}})
}
}
