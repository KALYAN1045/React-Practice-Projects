export default function Addfriend({ onAddFriend }) {
  return (
    <form className="m-3 border border-black-500 custom-inner-shadow bg-color-light flex flex-col h-[50%] w-[100%]">
      <h2 className="text-center font-bold m-2 bg-color-dark p-1 rounded-md shadow-lg">
        Add my Friend
      </h2>
      <div className="flex flex-col items-start justify-center m-2 font-bold">
        <div className="flex items-center mb-2 w-full">
          <label htmlFor="name" className="mr-2 w-24">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border rounded-md p-1 flex-1"
          />
        </div>
        <div className="flex items-center w-full">
          <label htmlFor="imageUrl" className="mr-2 w-24">
            Image URL:
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            className="border rounded-md p-1 flex-1"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-color-medium items-center justify-center px-3 py-1 rounded-lg hover:border-b-4 hover:border-color-db transition duration-900 hover:shadow-xl m-3 text-sm font-bold"
        >
          Add
        </button>
      </div>
    </form>
  );
}
