import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch
} from 'react-icons/io';
import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind
} from 'react-icons/bs';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { ImSpinner8 } from 'react-icons/im';
import { WeatherResponse } from '../utils/types';

const APIkey = 'bcf8185b90ef3ec8d128dff29fb7fd18';

interface IinputValue {
  value: string;
}

const initialWeatherData: WeatherResponse | null = null;
const WeatherPage = () => {
  const [data, setData] = useState<WeatherResponse | null>(initialWeatherData);
  const [location, setLocation] = useState<string>('Bishkek');
  const [inputValue, setInputValue] = useState<string>('');
  const [animate, setAnimate] = useState<boolean>(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue !== '') {
      setLocation(inputValue);
    }
  };

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIkey}`;
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [location]);

  if (!data) {
    return (
      <div className="wi-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center">
        <div>
          <ImSpinner8 className=" text-5xl text-white animate-spin absolute left-[50%] top-[50%]" />
        </div>
      </div>
    );
  }
  let icon;

  switch (data.weather[0].main) {
    case 'Clouds':
      icon = <IoMdCloudy />;
      break;
    case 'Haze':
      icon = <BsCloudHaze2Fill />;
      break;
    case 'Rain':
      icon = <IoMdRainy />;
      break;
    case 'Clear':
      icon = <IoMdSunny />;
      break;
    case 'Drizzle':
      icon = <BsCloudDrizzleFill />;
      break;
    case 'Snow':
      icon = <IoMdSnow />;
      break;
    case 'Thunderstrom':
      icon = <IoMdThunderstorm />;
      break;
  }

  const date = new Date();

  return (
    <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0">
      <form
        onSubmit={handleSubmit}
        className=" h-16 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-[32px] mb-8"
      >
        <div className=" h-full relative flex items-center justify-between p-2">
          <input
            type="text"
            className=" flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] font-light pl-6 h-full"
            placeholder="Search by city or country"
            onChange={handleInput}
          />
          <button
            type="submit"
            className="bg-[#1ab8ed] hover:bg-[#15abdd] w-20 h-12 rounded-full flex justify-center items-center transition "
          >
            <IoMdSearch className=" text-2xl text-white" />
          </button>
        </div>
      </form>
      <div className=" w-full max-w-[450px] bg-black/30 min-h-[584px] text-white backdrop-blur-[32px] rounded-[32px] px-6 py-12">
        <div>
          <div className=" flex items-center gap-x-5f ">
            <div className="text-[87px]">{icon}</div>
            <div>
              <div className=" text-2xl font-semibold">
                {data.name}, {data.sys.country}
              </div>
              <div>
                {date.getUTCDate()}/{date.getUTCMonth() + 1}/{date.getUTCFullYear()}
              </div>
            </div>
          </div>
          <div className=" my-20">
            <div className="flex justify-center items-center ">
              <div className=" text-[144px] leading-none font-light">
                {data.main.temp.toFixed()}
              </div>
              <div className=" text-4xl">
                <TbTemperatureCelsius />
              </div>
            </div>
            <div className="capitalize text-center ">{data.weather[0].description}</div>
          </div>
          <div className="max-w-[378px] mx-auto flex flex-col gap-y-6">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                <div className=" text-[20px]">
                  <BsEye />
                </div>
                <div>
                  Visibility <span className=" ml-2">{data.visibility / 1000} km</span>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <div className=" text-[20px]">
                  <BsThermometer />
                </div>
                <div className="flex">
                  Feels like
                  <div className="flex ml-2">
                    {data.main.feels_like}
                    <TbTemperatureCelsius />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                <div className=" text-[20px]">
                  <BsWater />
                </div>
                <div>
                  Humidity <span className=" ml-2">{data.main.humidity} %</span>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <div className=" text-[20px]">
                  <BsWind />
                </div>
                <div>
                  Wind <span className=" ml-2">{data.wind.speed} m/s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
