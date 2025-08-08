import { createContext } from "react"

export const DataContext = createContext(null);

const DataContextProvider = (props) => {

  let contextValue = {
   
  };
  return (
    <div>
      <DataContext.Provider value={contextValue}>
        {props.children}
      </DataContext.Provider>
    </div>
  )
}

export default DataContextProvider