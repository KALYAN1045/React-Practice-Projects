import { useState } from "react";

function Bill({ handlebill, bill }) {
  return (
    <div className="m-3 flex justify-center">
      <div className="text-center">
        <p className="p-3">How much was the Bill?</p>
        <input
          type="number"
          value={bill}
          onChange={(e) => handlebill(e.target.value)}
          className="m-1 border-black-500 border-2 rounded-md p-1"
        ></input>
      </div>
    </div>
  );
}

function Rating({ rating, handleRating, children }) {
  return (
    <div className="m-3 flex justify-center">
      <div className="text-center">
        {children}
        <select
          className="m-1 border-black-500 border-2 rounded-md p-1"
          value={rating}
          onChange={(e) => handleRating(e.target.value)}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was Good (10%)</option>
          <option value="20">It was Amazing (20%)</option>
        </select>
      </div>
    </div>
  );
}

export default function App() {
  const [bill, setBill] = useState("");
  const [rating, setRating] = useState("0");
  const [Frating, setFrating] = useState("0");

  const numericBill = parseFloat(bill) || 0; // Convert bill to number and handle empty or invalid input
  const averageRating = (Number(rating) + Number(Frating)) / 2; // Calculate average rating
  const tip = (numericBill * averageRating) / 100; // Calculate tip based on average rating
  const tot_bill = numericBill + tip;

  function handleReset() {
    setBill("");
    setRating("0");
    setFrating("0");
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="rounded shadow-lg p-5">
        <Bill
          handlebill={(val) => {
            setBill(val);
          }}
          bill={bill}
        />
        <Rating rating={rating} handleRating={(val) => setRating(val)}>
          <p className="p-3">How did you like the Service?</p>
        </Rating>
        <Rating rating={Frating} handleRating={(val) => setFrating(val)}>
          <p className="p-3">How did your Friend like the Service?</p>
        </Rating>
      </div>
      <div className="rounded shadow-lg p-5 m-5">
        <p>
          You pay $ {tot_bill} (${numericBill} + ${tip} tip)
        </p>
      </div>
      <button
        className="border-2 border-blue-400 p-1 rounded-md px-3 transform transition-all duration-300 hover:scale-110 hover:bg-blue-400 hover:text-white"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
