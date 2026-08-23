"use client";

import {useEffect, useRef, useState} from "react";

export const useMobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const navRef = useRef<HTMLElement>(null);

    const toggle = () => setIsOpen((prev) => !prev);
    const close = () => setIsOpen(false);

    useEffect(() => {
        if (!isOpen) return;

        navRef.current?.focus();
        document.body.style.overflow = "hidden";

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") close();
        };
        document.addEventListener("keydown", closeOnEscape);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", closeOnEscape);
            buttonRef.current?.focus();
        };
    }, [isOpen]);

    return {isOpen, toggle, close, buttonRef, navRef};
};
