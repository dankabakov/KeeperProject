import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [textInput, setInput] = useState({
    title: "",
    content: "",
    id: ""
  });
  const [activeInput, setActiveInput] = useState(false);

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

  function handleClick() {
    setActiveInput(true);
  }

  return (
    <div>
      <form
        className="create-note"
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
          style={{ display: activeInput ? "block" : "none" }}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={textInput.title}
        />
        <textarea
          onChange={handleChange}
          onClick={handleClick}
          name="content"
          placeholder="Take a note..."
          rows={activeInput ? 3 : 1}
          value={textInput.content}
        />
        <Zoom in={activeInput ? true : false}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
