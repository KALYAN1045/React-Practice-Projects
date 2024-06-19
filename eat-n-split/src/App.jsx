import Addfriend from "./add_friend.jsx";
import Split from "./split.jsx";
import Friend from "./friend.jsx";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

// App.jsx
export default function App() {
  return (
    <div className="back flex items-center justify-center min-h-screen bg-gray-200">
      <div className="backdrop-blur-sm bg-color-lightest w-[90%] md:w-[90%] lg:w-[80%] xl:w-[70%] h-[500px] p-5 rounded-lg shadow-xl flex border-b-4 border-color-db">
        <div className="w-[45%] h-[400px]">
          <div className="m-3 border border-black-500 custom-inner-shadow bg-color-light flex flex-col h-full">
            <h2 className="text-center font-bold m-2 bg-color-dark p-1 rounded-md shadow-lg">
              Friends List
            </h2>
            <div className="overflow-y-auto">
              {initialFriends.length === 0 ? (
                <div className="flex flex-1 justify-center items-center">
                  <p className="text-center">No friends added</p>
                </div>
              ) : (
                <div className="m-2">
                  {initialFriends.map((item, index) => (
                    <Friend
                      key={item.id}
                      name={item.name}
                      image={item.image}
                      balance={item.balance}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="text-center font-bold m-4 bg-color-dark p-1 rounded-md shadow-lg hover:border-b-4 hover:border-color-db transition duration-900">
            <button>Add Friends</button>
          </div>
        </div>

        {/* Right Half - Split component */}
        <div className="w-1/2 p-5 flex items-center justify-center">
          <Split />
        </div>
      </div>
    </div>
  );
}
