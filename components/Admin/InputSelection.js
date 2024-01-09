import { IconEdit, IconSend } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { Dropdown, Spinner } from "react-bootstrap";

const InputSelection = ({ message, setInputChat, setInputSetBySelection }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState(null);

  const getOptions = () => {
    const maxTokens = 100; // Optional

    fetch("/api/openapi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, maxTokens }),
    })
      .then((response) => response.json())
      .then((data) => {
        // The data object will contain the response from the OpenAI API
        console.log(data);
        setOptions(data?.choices);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const sendMessageToModel = () => {
    //send message to the model
  };

  const tempOptions = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
  ];
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    getOptions();
  }, []);

  return (
    <div className="mx-2">
      {console.log(options)}
      <p>Select an option:</p>
      {options ? (
        options.map((option, index) => (
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
        ))
      ) : (
        <Spinner animation="border" />
      )}
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
