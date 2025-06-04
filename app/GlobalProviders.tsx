import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode } from "react";

export default function GlobalProviders({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <AppRouterCacheProvider>
            {children}
        </AppRouterCacheProvider>
    );
}