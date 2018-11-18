export interface WeatherInterface {
  location: WeatherLocationInterface;
  current: WeatherDetailedInterface;
  forecast: WeatherForecastInterface[];
}

export interface WeatherForecastInterface {
  low: number;
  high: number;
  skycodeday: number;
  skytextday: string;
  date: string;
  day: string;
  shortday: string;
  precip: number;
}

export interface WeatherLocationInterface {
  name: string;
  lat: string;
  long: string;
  timezone: string;
  alert: string;
  degreetype: string;
  imagerelativeurl: string;
}

export interface WeatherDetailedInterface {
  temperature: number;

  skycode: number;

  skytext: string;

  // ex : 2017-03-14
  date: string;

  // ex : 13:15:00
  observationtime: string;
  // ex : "San Francisco, California"
  observationpoint: string;
  feelslike: 70;
  humidity: 59;
  winddisplay: string;
  day: string;
  shortday: string;
  windspeed: string;
  imageUrl: string;
}
