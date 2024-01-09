import { IconEdit, IconSend } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { Dropdown, Spinner } from "react-bootstrap";

const useOptions = (message) => {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch("/api/openai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message, maxTokens: 100 }),
        });

        const data = await response.json();
        setOptions(data?.choices);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchOptions();
  }, [message]);

  return options;
};

const InputSelection = ({ message, setInputChat, setInputSetBySelection }) => {
  const options = useOptions(message);

  return (
    <div>
      {options ? (
        options.map((option, index) => (
          <div
            className="d-flex border rounded p-2 justify-content-between text-wrap text-break "
            key={index}
          >
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
    </div>
  );
};

export default InputSelection;
