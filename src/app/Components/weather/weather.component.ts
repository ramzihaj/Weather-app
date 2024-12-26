import { Component, OnInit } from '@angular/core';
import { BackGroundColorDirective } from '../../Directives/back-ground-color.directive';
import { ActivatedRoute } from '@angular/router';
import { TemperatureConversionPipe } from '../../Pipes/temperature-conversion.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [BackGroundColorDirective, TemperatureConversionPipe, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  temperture:number =0;
  unit:string = 'F';
  constructor(private route: ActivatedRoute)
  {

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>
    {
      const tempertureParam = params['temperture'];
      if(tempertureParam)
        {
          this.temperture = +tempertureParam;
        }
    });
  }
  toggleUnit() 
  {
    this.unit = this.unit === 'C' ? 'F' : 'C';
  }
}
