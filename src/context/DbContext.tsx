import { ISchool } from "@/interface/school.interface";
import { schools2 } from "@/mock/schools";
import { createContext, ReactNode, useEffect, useState } from "react";

type DbContextType = {
  schoolList : ISchool[]
  };
  
  type DbContextProviderProps = {
    children: ReactNode;
  };

export const DbContext = createContext({} as DbContextType);

export function DbContextProvider(props: DbContextProviderProps) {
  const [schoolList, setSchoolList] = useState<ISchool[]>(schools2);

  


  return (
    <DbContext.Provider
      value={{
        schoolList
      }}
    >
      {props.children}
    </DbContext.Provider>
  );
}