"use client";

import React, {useState} from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Button,
    Image
} from "@nextui-org/react";
import Link from "next/link";

import {cn} from "@/utils/cn";
import {useCurrentPage} from "@/hooks/useCurrentPage";
import {usePathname} from "next/navigation";
import {TransSwitch} from "@/components/commons/TransSwitch";
import {useTranslation} from "next-export-i18n";

export default function Header({...props}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {pages, isPageActive} = useCurrentPage();
    const pathname = usePathname();
    const {t} = useTranslation()

    const isNotHomePage = pathname !== '/';

    return (
        <Navbar
            {...props}
            isBordered
            classNames={{
                base: cn("border-default-100", {
                    "bg-background/95": isMenuOpen,
                    "bg-background": !isMenuOpen,
                }),
                wrapper: "w-full justify-center bg-transparent",
            }}
            height="60px"
            isMenuOpen={isMenuOpen}

            isBlurred
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarMenuToggle className="text-default-400 md:hidden"/>

            <NavbarBrand >
                <Image src='/website/logo_luxo.png' radius='none' className='w-[55px]'/>
            </NavbarBrand>
            <NavbarContent
                className="hidden h-11 gap-4 rounded-full border-small border-white/20  px-4 shadow-medium backdrop-blur-md backdrop-saturate-150 bg-content1 md:flex"
                justify="center"
            >
                {pages.map((item) => (
                    <NavbarItem key={item.name} isActive={isPageActive(item.href)}>
                        <Link href={isNotHomePage ? `/${item.href}` : item.href}
                              className={`text-default-500 ${isPageActive(item.href) ? 'text-primary-500' : ''}`}
                              size="sm">
                            {t(item.t)}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end" className='gap-1'>
                <NavbarItem>
                    <TransSwitch/>
                </NavbarItem>

                <NavbarItem >
                    <Button
                        color="primary"
                        radius="full"
                        variant="flat"
                        onPress={() => window.open("https://bees.luxochain.io/dashboard", "_blank")}
                    >
                        {t("getStarted")}
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu
                className="top-[calc(var(--navbar-height)_-_1px)] max-h-[70vh] pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 bg-default-100/50"
                motionProps={{
                    initial: {opacity: 0, y: -20},
                    animate: {opacity: 1, y: 0},
                    exit: {opacity: 0, y: -20},
                    transition: {
                        ease: "easeInOut",
                        duration: 0.2,
                    },
                }}
            >
                {pages.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`}>
                        <Link className={`w-full text-foreground ${isPageActive(item.href) ? 'text-primary-500' : ''}`}
                              onClick={() => {
                                  console.log('clicked')
                                  setIsMenuOpen(false)
                              }}
                              href={isNotHomePage ? `/${item.href}` : item.href} size="md">
                            {t(item.t)}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
