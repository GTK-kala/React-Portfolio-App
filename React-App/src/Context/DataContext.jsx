import { createContext, useState } from "react";
import { stats } from "../assets/DataAssets/Data";
import { skills } from "../assets/DataAssets/Data";
import { projects } from "../assets/DataAssets/Data";

export const DataContext = createContext(null);

const DataContextProvider = (props) => {
  const [toggle, setToggle] = useState("");
  const [isOpen, setIsOpen] = useState("");

  const ToggleHandel = () => {
    if (toggle === "") {
      setToggle("clicked");
      setIsOpen("open");
    } else {
      setToggle("");
      setIsOpen("");
    }
  };

  let contextValue = {
    skills,
    stats,
    projects,
    ToggleHandel,
    setToggle,
    setIsOpen,
    toggle,
    isOpen
  };
  return (
    <>
      <DataContext.Provider value={contextValue}>
        {props.children}
      </DataContext.Provider>
    </>
  );
};

export default DataContextProvider;
