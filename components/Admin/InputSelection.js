import { IconEdit, IconSend } from "@tabler/icons-react";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const InputSelection = ({ message, setInputChat, setInputSetBySelection }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const tempOptions = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
  ];
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="mx-2">
      <p>Select an option:</p>
      {tempOptions.map((option) => {
        return (
          <div className="d-flex border rounded p-2 justify-content-between text-wrap text-break ">
            <p>{option.name}</p>
            <div>
              <IconEdit onClick={() => setInputChat(option?.name)} />

              <IconSend
                className="text-primary ms-3"
                onClick={() => {
                  setInputChat(option?.name);
                  setInputSetBySelection(true);
                }}
              />
            </div>
          </div>
        );
      })}
      {selectedOption && (
        <div>
          <p>Selected option: {selectedOption}</p>
          <button onClick={handleSend}>Send</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default InputSelection;
