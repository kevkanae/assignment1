export interface IWeatherDetails {
  current: {
    temperature: number;
    weather_icons: [string];
    precip: number;
    wind_speed: number;
  };
}
