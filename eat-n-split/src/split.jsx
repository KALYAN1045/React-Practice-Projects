export default function Split({ name }) {
  return (
    <form className="border border-black-500 custom-inner-shadow bg-color-light flex flex-col h-[75%] w-[100%]">
      <h2 className="text-center font-bold m-2 bg-color-dark p-1 rounded-md shadow-lg">
        Split expense with {name}
      </h2>
      <div className="flex flex-col justify-center m-5 font-bold ">
        <div className="flex items-center mb-2 w-full">
          <label
            htmlFor="billValue"
            className="min-w-[100px] text-left mr-auto"
          >
            Bill Value:
          </label>
          <input
            type="number"
            id="billValue"
            name="billValue"
            className="border rounded-md p-1 w-24 text-center"
          />
        </div>
        <div className="flex items-center mb-2 w-full">
          <label
            htmlFor="yourExpense"
            className="min-w-[100px] text-left mr-auto"
          >
            Your expense:
          </label>
          <input
            type="number"
            id="yourExpense"
            name="yourExpense"
            className="border rounded-md p-1 w-24 text-center"
          />
        </div>
        <div className="flex items-center mb-2 w-full">
          <label
            htmlFor="friendExpense"
            className="mr-auto min-w-[100px] text-left"
          >
            {name}'s expense:
          </label>
          <input
            type="number"
            id="friendExpense"
            name="friendExpense"
            className="border rounded-md p-1 w-24 text-center bg-color-medium"
            value="100"
            readOnly
          />
        </div>
        <div className="flex items-center mb-2 w-full">
          <label
            htmlFor="payingPerson"
            className="mr-auto min-w-[100px] text-left"
          >
            Who's paying the bill?
          </label>
          <select
            id="payingPerson"
            name="payingPerson"
            className="border rounded-md p-1 w-24 text-center"
          >
            <option value="0">You</option>
            <option value="1">{name}</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-color-medium items-center justify-center px-3 py-1 rounded-lg hover:border-b-4 hover:border-color-db transition duration-900 hover:shadow-xl m-3 text-sm font-bold"
        >
          Split Bill!
        </button>
      </div>
    </form>
  );
}
