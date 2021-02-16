import "./App.css";
import React, { useState } from "react";
import { Button, Row } from "react-materialize";
import MultiSelectSearch from "./components/MultiSelectSearch";

const initialFormData = {
  selectData: [],
  checkboxData: false,
  textData: "",
};

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({});

  const updateFormField = (value, name) => {
    const data = { ...formData, [name]: value };
    setFormData(data);
  };
  const onSubmit = () => {
    const data = formData;
    setSubmittedData(data);
    setIsSubmitted(true);
  };

  const onClear = () => {
    setIsSubmitted(false);
    setSubmittedData({});
    setFormData(initialFormData);
  };

  return (
    <div className="App">
      <form
        id="form"
        className="flex-col"
        style={{
          alignItems: "center",
          marginTop: "50px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div
          id="formDiv"
          style={{ border: "1px solid rgba(0, 0, 0, 0.33)", width: "600px" }}
        >
          <Row>
            <label>
              <span>Add Text</span>
              <input
                id="textInput"
                type="text"
                value={formData.textData}
                onChange={(e) => {
                  const { value } = e.target;
                  updateFormField(value, "textData");
                }}
              ></input>
            </label>
          </Row>
          <Row>
            <label>
              <span>Select some</span>
              <MultiSelectSearch
                id="selectInput"
                label="Select"
                value={formData.selectData}
                onSelect={(e) => {
                  const { value } = e.target;
                  updateFormField(value, "selectData");
                }}
                singleSelect={false}
                options={[
                  { name: "ABC", value: "ABC" },
                  { name: "DEF", value: "DEF" },
                  { name: "GHI", value: "GHI" },
                  { name: "JKL", value: "JKL" },
                ]}
                keys={["value", "name"]}
              />
            </label>
          </Row>
          <Row>
            <label>
              <input
                id="checkbox"
                type="checkbox"
                checked={formData.checkboxData}
                onChange={(e) => {
                  updateFormField(!formData.checkboxData, "checkboxData");
                }}
              ></input>
              <span>Check me</span>
            </label>
          </Row>
          <Row>
            <Button id="submitButton">Submit</Button>
            <Button
              id="clearButton"
              onClick={(e) => {
                e.preventDefault();
                onClear();
              }}
            >
              Clear
            </Button>
          </Row>
        </div>
      </form>
      {isSubmitted && (
        <div id="submittedData" style={{ marginTop: "20px" }}>
          {JSON.stringify(submittedData)}
        </div>
      )}
    </div>
  );
}

export default App;
