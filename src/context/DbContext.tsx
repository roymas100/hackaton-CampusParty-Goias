import { ISchool } from "@/interface/school.interface";
import { schools } from "@/mock/schools";
import { createContext, ReactNode, useState } from "react";


type DbContextType = {
  getSchoolData : ()=> ISchool[]
  };
  
  type DbContextProviderProps = {
    children: ReactNode;
  };

export const DbContext = createContext({} as DbContextType);

export function DbContextProvider(props: DbContextProviderProps) {
  const [schoolList, setSchoolList] = useState<ISchool[]>(schools);

  const getSchoolData = ()=>{
    return schoolList
  }
  return (
    <DbContext.Provider
      value={{
        getSchoolData
      }}
    >
      {props.children}
    </DbContext.Provider>
  );
}