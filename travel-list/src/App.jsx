import "./index.css";
import Form from "./Form.jsx";
import List from "./List.jsx";
import Stats from "./stats.jsx";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]); // Lift up state from form component

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const response = window.confirm("Do you want to Clear all items?");
    if (response) setItems([]);
  }

  return (
    <div className="app">
      <h1> Trip scribe </h1>
      <Form onAddItems={handleAddItems} />
      <List
        items={items}
        onDeleteItems={handleDeleteItems}
        onUpdateItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
