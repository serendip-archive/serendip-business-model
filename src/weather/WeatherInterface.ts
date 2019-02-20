import { WeatherDetailedInterface } from "./WeatherDetailedInterface";
import { WeatherForecastInterface } from "./WeatherForecastInterface";
import { WeatherLocationInterface } from "./WeatherLocationInterface";

export interface WeatherInterface {
  location: WeatherLocationInterface;
  current: WeatherDetailedInterface;
  forecast: WeatherForecastInterface[];
}
