import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DismissableAlert from "./components/DismissableAlert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New york",
    "Los Angeles",
    "Chicago",
    "San Francisco",
    "Miami",
    "London",
  ];

  const [alertVisible, setAlertVisibility] = useState(false);

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // items= [];

  const handleButtonClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      {alertVisible && <DismissableAlert onClose={ () => setAlertVisibility(false)}>Click to dismiss</DismissableAlert>}

      <Alert>
        Hello <span>World</span>
      </Alert>

      {/* {" "}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />{" "} */}
      <Button type="primary" onClick={ () => setAlertVisibility(!alertVisible)}>
        Button Text
      </Button>
    </div>
  );
}

export default App;
