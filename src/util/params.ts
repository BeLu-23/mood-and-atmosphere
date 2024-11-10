import { createTheme } from "@mui/material";

export const smallWindow = 1200;

export const baseURL = '/mood-and-atmosphere/'

export interface WindowWidthProps {
    windowWidth: number;
}

export const theme = createTheme({
    typography: {
        fontFamily: `"Baskerville Old Face", Baskerville, serif`,
    }
})