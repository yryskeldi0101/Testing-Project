interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainWeatherData {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface SystemData {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherResponse {
  weather: Weather[];
  main: MainWeatherData;
  wind: Wind;
  clouds: Clouds;
  sys: SystemData;
  name: string;
  visibility: number;
}
export interface IUserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
  };
}
