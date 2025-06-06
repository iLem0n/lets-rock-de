"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import darkTheme from "./theme/darkTheme";

export default function GlobalProviders({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={darkTheme}>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
