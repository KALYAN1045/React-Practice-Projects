import React from "react";

export default function Friend({ name, image, balance }) {
  return (
    <div className="flex flex-row m-2 rounded shadow-lg p-3 bg-color-lightest">
      <img
        src={image}
        alt={name}
        className="rounded-full border-2 border-color-db"
      ></img>
      <div className="ml-2">
        <h2 className="font-bold">{name}</h2>
        {balance < 0 && (
          <p className="p text-sm text-red-500 font-semibold">
            You owe {name} $ {Math.abs(balance)}
          </p>
        )}
        {balance === 0 && (
          <p className="p text-sm font-semibold">You and {name} are even</p>
        )}
        {balance > 0 && (
          <p className="p text-sm text-green-500 font-semibold">
            {name} owes you $ {Math.abs(balance)}
          </p>
        )}
      </div>
      <div className="mr-3 ml-auto flex items-center">
        <div className="inline-block bg-color-medium px-3 py-1 rounded-lg hover:border-b-4 hover:border-color-db transition duration-900 hover:shadow-xl">
          <button className="text-sm font-bold">Select</button>
        </div>
      </div>
    </div>
  );
}
