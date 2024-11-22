'use client'

import * as React from "react";

import {NextUIProvider} from "@nextui-org/react";

const UIProvider = ({children}) => {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
}

export default UIProvider;