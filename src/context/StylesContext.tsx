import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from "react";
import light from "../styles/light"
import { IColorMode, ITheme } from "@/interface/styles.interface";
import dark from "@/styles/dark";


type StylesContextType = {
    theme: ITheme,
    isDarkMode: boolean,
    setColorMode: Dispatch<SetStateAction<IColorMode>>
  };
  
  type StylesContextProviderProps = {
    children: ReactNode;
  };

export const StylesContext = createContext({} as StylesContextType);

export function StylesContextProvider(props: StylesContextProviderProps) {
    const [colorMode, setColorMode] = useState<IColorMode>("DARK")

    const theme = useMemo(() => {
        if (colorMode === "DARK") {
            return dark
        }

        return light

    }, [colorMode])

    const isDarkMode = useMemo(() => {
      return colorMode === "DARK"
  }, [colorMode])
    

  return (
    <StylesContext.Provider
      value={{
        isDarkMode,
        theme,
        setColorMode
      }}
    >
      {props.children}
    </StylesContext.Provider>
  );
}

export function useStyles() {
  const value = useContext(StylesContext);
  return value;
}
