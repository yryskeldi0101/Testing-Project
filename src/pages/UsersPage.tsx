import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { userImgArray } from '../utils/constants/constants';
import { IUserData } from '../utils/types';

const UsersPage = () => {
  const [data, setData] = useState<IUserData[]>([]);
  const [value, setValue] = useState<string>('');
  const url = 'https://jsonplaceholder.typicode.com/users';
  const getData = useCallback(async () => {
    try {
      const res = await axios.get(url);
      const filtered = res?.data.filter(
        (item: IUserData) => value && item.name.toLowerCase().includes(value.toLowerCase())
      );
      setData(value.trim().length > 0 ? filtered : res.data);
      return res.data;
    } catch (error) {
      return error;
    }
  }, [url, value]);

  useEffect(() => {
    getData();
  }, [getData]);
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="mx-auto px-10 flex flex-wrap h-full">
      <div className="w-full flex items-center justify-center mt-5 ">
        <input
          className=" w-full  bg-inherit border-b-2 border-purple-400 py-5 placeholder:text-xl text-xl  px-2 border-t-2 border-solid inset-0 focus: outline-0 cursor-pointer focus:text-white placeholder:focus:text-white"
          placeholder="Search user by name ..."
          value={value}
          type="text"
          onChange={inputChangeHandler}
        />
      </div>
      <div className="flex gap-x-[3.2rem] w-full gap-y-10 flex-wrap mt-10 mb-3 h-full">
        {data?.map((item, index) => {
          if (value && !item.name.toLowerCase().includes(value.toLowerCase())) {
            return null;
          }
          return (
            <div className="group relative block bg-black w-80 h-[400]" key={item.id}>
              <img
                src={userImgArray[index].img}
                alt="avatar"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-xl font-bold text-white sm:text-2xl">{item.name}</p>

                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                  {item.email}
                </p>

                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                  {item.address.city}
                </p>
                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut amet accusamus
                      exercitationem. Delectus, amet ea! Nemo tempore eveniet rem. Aperiam
                      voluptatibus natus officia similique provident quas et. Incidunt, illum fuga!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="w-full h-full flex items-center justify-center">
          {data?.length === 0 && (
            <div className=" p-5 flex flex-col justify-center items-center">
              <span className="loading loading-spinner loading-lg"></span>
              <h1 className="text-4xl text-gray-700 font-bold w-80 mt-5">
                Sorry the user you were looking for was not found!
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
