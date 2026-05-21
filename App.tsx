import React from "react";

import { ThemeProvider } from "@/provider/ThemeProvider";

import RootNavigator from "@/navigation/RootNavigator";

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}
