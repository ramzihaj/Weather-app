import { Component, OnInit } from '@angular/core';
import { BackGroundColorDirective } from '../../Directives/back-ground-color.directive';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  imports: [BackGroundColorDirective],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  temperture:number =0;

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
}
