'use client'

import * as React from "react";

import UIProvider from "@/providers/UIProvider";
const Providers = ({children}) => {
    return (
        <UIProvider>
            {children}
        </UIProvider>
    );
}

export default Providers;