import React, { useState } from 'react';
type ArrayType = {
  item: string;
  id: number;
  number: number;
};
const MainPage = () => {
  const [array, setArray] = useState<ArrayType[]>([]);
  const clickHandler = () => {
    let num = 1;
    const newItem: ArrayType = {
      item: 'Item',
      id: Math.random(),
      number: (num = num + 1)
    };
    setArray([...array, newItem]);
  };
  const deleteHandler = (id: number) => {
    const filtered = array.filter((item) => item.id !== id);
    setArray(filtered);
  };
  return (
    <div className="flex flex-col items-center w-full h-full">
      <button onClick={clickHandler} className="btn btn-primary my-10">
        Click me
      </button>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Num:</th>
              <th>Item Name:</th>
              <th>Action:</th>
            </tr>
          </thead>
          <tbody>
            {array?.map((item) => {
              return (
                <tr className="hover:bg-base-200" key={item.id}>
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
