import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { userImgArray } from '../utils/constants/constants';

interface IuserData {
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
const UsersPage = () => {
  const [data, setData] = useState<IuserData[]>([]);
  const url = 'https://jsonplaceholder.typicode.com/users';
  const getData = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="mx-auto px-10 flex flex-wrap">
      <div className="flex gap-x-10 w-full gap-y-10 flex-wrap mt-10">
        {data?.map((item, index) => {
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
      </div>
    </div>
  );
};

export default UsersPage;
