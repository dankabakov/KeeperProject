import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 } from "uuid";

function App() {
  const [items, setItems] = useState([]);

  function addNote(textInput) {
    setItems((prevItems) => [
      ...prevItems,
      {
        title: textInput.title,
        content: textInput.content,
        id: v4()
      }
    ]);
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.id !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {items.map((item) => (
        <Note
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          onChecked={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
