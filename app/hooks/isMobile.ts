
import useMediaQuery from "@mui/material/useMediaQuery";

export default function useIsMobile() {
    return useMediaQuery('(max-width:768px)');
}
