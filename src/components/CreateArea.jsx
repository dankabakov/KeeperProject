import React, { useState } from "react";

function CreateArea(props) {
  const [textInput, setInput] = useState({
    title: "",
    content: "",
    id: ""
  });

  // save title and content input seperately
  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return {
        ...textInput,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          props.onAdd(textInput);
          setInput({
            title: "",
            content: "",
            id: ""
          });
          event.preventDefault();
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={textInput.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={textInput.content}
        />
        <button type="submit"> Add </button>
      </form>
    </div>
  );
}

export default CreateArea;
