import Addfriend from "./add_friend.jsx";
import Split from "./split.jsx";
import Friend from "./friend.jsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [AddfriendWindow, setAddfriendWindow] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriendWindow() {
    if (selectedFriend) {
      setSelectedFriend(null);
      setTimeout(() => {
        setAddfriendWindow(true);
      }, 500);
      return;
    }
    setAddfriendWindow((show) => !show);
  }

  function handleAddNewFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setAddfriendWindow(false);
  }

  function handleSelection(friend) {
    if (AddfriendWindow) {
      setAddfriendWindow(false);

      setTimeout(() => {
        setSelectedFriend((currentSelected) =>
          currentSelected && currentSelected.id === friend.id ? null : friend
        );
      }, 500);
      return;
    }
    setSelectedFriend((currentSelected) =>
      currentSelected && currentSelected.id === friend.id ? null : friend
    );
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="back flex items-center justify-center min-h-screen bg-gray-200">
      <div className="backdrop-blur-sm bg-color-lightest w-[90%] md:w-[90%] lg:w-[80%] xl:w-[70%] h-[500px] p-5 rounded-lg shadow-xl flex border-b-4 border-color-db">
        <div className="w-[45%] h-[400px]">
          <div className="border border-black-500 custom-inner-shadow bg-color-light flex flex-col h-full">
            <h2 className="text-center font-bold m-2 bg-color-dark p-1 rounded-md shadow-lg">
              Friends List
            </h2>
            <div className="overflow-y-auto">
              {friends && friends.length === 0 ? (
                <div className="flex flex-1 justify-center items-center">
                  <p className="text-center">No friends added</p>
                </div>
              ) : (
                <div className="m-2">
                  {friends.map((item, index) => (
                    <Friend
                      key={item.id}
                      friend={item}
                      onSelection={handleSelection}
                      selectedFriend={selectedFriend}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleAddFriendWindow}
              className="text-center font-bold m-4 bg-color-dark p-1 rounded-md shadow-lg hover:border-b-4 hover:border-color-db transition duration-900 w-[70%]"
            >
              {AddfriendWindow ? "Close" : "Add Friend"}
            </button>
          </div>
        </div>

        <div className="w-1/2 p-5 flex items-center justify-center">
          <AnimatePresence>
            {AddfriendWindow && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Addfriend
                  onAddFriend={handleAddNewFriend}
                  selectedFriend={selectedFriend}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {selectedFriend && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Split
                  selectedFriend={selectedFriend}
                  onSplitBill={handleSplitBill}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
