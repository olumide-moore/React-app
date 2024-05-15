import { useState } from "react";

interface ListGroupProps {
  //define the type and structure of the props
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //Hook (functions that lets you use React features in functional components)
  //state hook: lets you tell React that your component will have data that changes over time

  const [selectedIndex, setSelectedIndex] = useState(-1);
  //variable (selectedIndex)
  //updater function (allows you to update the variable selectedIndex and automatically re-render the component)

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p className="list-group-item">No items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            // onClick={(event) => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

//Props input data passed to a component (like function arguments)
//Props are immutable (read-only)

//State is an internal data that changes over time managed by the component (like local variables)
//State is mutable (can be changed)
//Every time the state changes, the specific component re-renders