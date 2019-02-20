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
