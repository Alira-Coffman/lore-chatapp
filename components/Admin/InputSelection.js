import { IconEdit, IconSend } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { Dropdown, Spinner } from "react-bootstrap";

const InputSelection = ({
  message,
  setInputChat,
  setInputSetBySelection,
  sendToServer,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState(null);

  const getOptions = async () => {
    const maxTokens = 100; // Optional
    try {
      const response = await fetch("/api/example");
      const data = await response.json();
      setOptions(data.options);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const sendMessageToModel = async (adminMessage) => {
    //send message to the model
    //api call to the model to send the message

    const response = await fetch("/api/example", {
      method: "POST",
      body: JSON.stringify({ prompt: adminMessage, maxTokens: 100 }),
    });
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    getOptions();
  }, []);

  return (
    <div className="mx-2">
      <p>Select an option:</p>
      {options ? (
        options.map((option, index) => (
          <div
            key={index}
            className="d-flex border rounded p-2 admin-option justify-content-between text-wrap text-break "
          >
            <p className="w-75">
              {option?.quote} - {option?.author}
            </p>
            <div>
              <IconEdit
                onClick={() => {
                  setInputChat(`${option?.quote} - ${option?.author}`);
                }}
              />

              <IconSend
                className="text-primary ms-3"
                onClick={() => {
                  setInputChat(`${option?.quote} - ${option?.author}`);
                  setInputSetBySelection(true);
                  sendMessageToModel(`${option?.quote} - ${option?.author}`);
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
