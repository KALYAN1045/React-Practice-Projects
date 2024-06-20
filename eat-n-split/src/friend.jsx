import React from "react";

export default function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend && selectedFriend.id === friend.id;
  return (
    <div
      className={`flex flex-row m-2 rounded shadow-lg p-3 bg-color-lightest ${
        isSelected ? "border-2 border-color-db" : ""
      }`}
    >
      <img
        src={friend.image}
        alt={friend.name}
        className="rounded-full border-2 border-color-db"
      ></img>
      <div className="ml-2">
        <h2 className="font-bold">{friend.name}</h2>
        {friend.balance < 0 && (
          <p className="p text-sm text-red-500 font-semibold">
            You owe {friend.name} $ {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && (
          <p className="p text-sm font-semibold">
            You and {friend.name} are even
          </p>
        )}
        {friend.balance > 0 && (
          <p className="p text-sm text-green-500 font-semibold">
            {friend.name} owes you $ {Math.abs(friend.balance)}
          </p>
        )}
      </div>
      <div className="mr-3 ml-auto flex items-center">
        <div>
          <button
            className={
              isSelected
                ? "select_btn border-b-4 border-color-db"
                : "select_btn"
            }
            onClick={() => onSelection(friend)}
          >
            {isSelected ? "Close" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
}
