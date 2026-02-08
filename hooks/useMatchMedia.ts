import {useEffect, useState} from "react";


export const useMatchMedia = (query: string): boolean => {
    const [isMatch, setIsMatch] = useState<boolean>(false);

    useEffect(() => {
        if (!window.matchMedia)
            return;

        // initial
        const mediaQueryList = window.matchMedia(query);
        setIsMatch(mediaQueryList.matches);

        // change listener
        const handleChange = (e: MediaQueryListEventMap["change"]) => {
            setIsMatch(e.matches);
        }
        mediaQueryList.addEventListener("change", handleChange);
        return () => mediaQueryList.removeEventListener("change", handleChange);
    }, [query]);

    return isMatch;
}