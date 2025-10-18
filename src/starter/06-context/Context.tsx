import { createContext, useContext, useState } from "react";


const ThemeProviderContext = createContext<string | undefined>(undefined);


export function ThemeProvider({ children }: { children: React.ReactNode }) {

    <ThemeProviderContext.Provider value='hello'>
        {children}
    </ThemeProviderContext.Provider>
}