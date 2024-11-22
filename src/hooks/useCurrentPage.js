import {useParams, usePathname} from 'next/navigation';
import {pages} from "@/config/pages";
import {useEffect, useState} from "react";

export const useCurrentPage = () => {
    const pathname = usePathname();
    const params = useParams()
    const [hash, setHash] = useState('');

    const isPageActive = (pageHref) => {

        if (hash) {
            return hash === pageHref;
        }
        if (pathname === '/') {
            return pageHref === '#home';
        }
        return pathname === pageHref;
    }

    useEffect(() => {
        setHash(window.location.hash);
    }, [params]);

    return {pages, isPageActive};
};
