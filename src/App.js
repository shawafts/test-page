import "./App.css";
import React, { useState } from "react";
import { CustomModal } from "./components/CustomModal";
import { Button } from "react-materialize";

function App() {
  const [normalDiv, setNormalDiv] = useState(false);
  const [delayedDiv, setDelayedDiv] = useState(false);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleDelayedDiv = () => {
    if (delayedDiv) setDelayedDiv(false);
    else {
      setLoading(true);
      setTimeout(() => {
        setDelayedDiv(true);
        setLoading(false);
      }, getRandomTimeoutValue());
    }
  };

  const getRandomTimeoutValue = () =>
    (Math.floor(Math.random() * 10) + 1) * 1000;

  return (
    <div className="App">
      <div id="parentDiv1">
        {/* <Button id="normalDivButton" onClick={() => setNormalDiv(!normalDiv)}> */}
        <Button id="normalDivButton" onClick={() => {}}>
          Show Div
        </Button>
        {normalDiv && <div id="normalDiv">Div here</div>}
      </div>
      <div id="parentDiv2">
        <Button
          id="delayedDivButton"
          disabled={loading}
          onClick={toggleDelayedDiv}
        >
          Delayed Div
        </Button>
        {delayedDiv && <div id="delayedDiv">Delayed div here</div>}
      </div>
      <div id="parentDiv3">
        <Button id="modalDivButton" onClick={() => setModal(!modal)}>
          Modal
        </Button>
        <CustomModal
          id="modalDiv"
          show={modal}
          headerTitle=" "
          showTriggerButton={false}
          handleClose={() => setModal(false)}
          modalStyle={{ width: "400px", paddingTop: "0px", height: "auto" }}
          actions={[
            <Button
              flat
              modal="close"
              node="button"
              waves="green"
              style={{ marginRight: "20px", width: "60px" }}
            >
              Close
            </Button>,
          ]}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </CustomModal>
      </div>
    </div>
  );
}

export default App;
