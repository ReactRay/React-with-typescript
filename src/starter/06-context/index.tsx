
import { useContext } from "react";
import { ThemeProvider, ThemeProviderContext } from "./Context";


export default function ParentComponent() {

  return <ThemeProvider>
    <Component />
  </ThemeProvider>
}

function Component() {

  const { theme, setTheme } = useTheme();

  console.log(theme)

  return (
    <div>
      <h2>React & Typescript</h2>
      <button onClick={() => {
        if (theme === 'dark') {
          setTheme('system')
          return
        }
        setTheme('dark')
      }}>toggle Theme</button>
    </div>
  );
}


export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');
  return context
}