import { createContext } from "react"
import { stats } from "../assets/DataAssets/Data";
import { skills } from "../assets/DataAssets/Data";
import { projects } from "../assets/DataAssets/Data";

export const DataContext = createContext(null);

const DataContextProvider = (props) => {

  let contextValue = {
      skills,
      stats,
      projects
  };
  return (
    <>
      <DataContext.Provider value={contextValue}>
        {props.children}
      </DataContext.Provider>
    </>
  )
}

export default DataContextProvider