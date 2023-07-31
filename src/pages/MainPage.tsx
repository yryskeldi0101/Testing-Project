import React, { useState } from 'react';
type ArrayType = {
  item: string;
  id: number;
  number: number;
};
const MainPage = () => {
  const [array, setArray] = useState<ArrayType[]>([]);
  const [num, setNum] = useState<number>(1);
  const clickHandler = () => {
    setNum((prev) => prev + 1);
    const newItem: ArrayType = {
      item: 'Item',
      id: Math.random(),
      number: num
    };
    setArray([...array, newItem]);
  };
  const deleteHandler = (id: number) => {
    const filtered = array.filter((item) => item.id !== id);
    setArray(filtered);
  };
  return (
    <div className="flex flex-col items-center w-full h-screen bg-gradientBg">
      <button onClick={clickHandler} className="btn btn-primary my-10">
        Click me
      </button>
      <div className="overflow-x-auto">
        <table className="table w-[500px]">
          <thead>
            <tr className="text-black text-3xl font-bold">
              <th>Num:</th>
              <th>Item Name:</th>
              <th>Actions:</th>
            </tr>
          </thead>
          <tbody>
            {array?.map((item) => {
              return (
                <tr className="hover:bg-base-200 text-blue-800 text-2xl font-bold" key={item.id}>
                  <th>{item.number}</th>
                  <td>{item.item}</td>
                  <td>
                    <button
                      onClick={() => deleteHandler(item.id)}
                      className="btn btn-outline btn-primary"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainPage;
