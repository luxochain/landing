"use client";

import Header from "@/components/Navbar/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Suspense} from "react";

export default function PageLayout({ children }) {
    return (
        <Suspense fallback>
            <Header />
            {children}
            <ToastContainer
                hideProgressBar={false}
                draggable
                pauseOnHover
                pauseOnFocusLoss
                closeOnClick
                theme="dark"
                position="bottom-right"
                autoClose={2000}
                limit={4}
            />
        </Suspense>
    );
}
