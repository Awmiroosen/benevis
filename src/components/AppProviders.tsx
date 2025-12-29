import { ThemeProvider } from "next-themes";
import type { Children } from "@/types/global";

const AppProviders = ({ children }: Children) => {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default AppProviders;
