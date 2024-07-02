import React from "react";
import SwitchLocale from "../ui/switch-locale";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "../ApplicationLogo";
import NavLink from "../NavLink";
import { LocaleData } from "@/types/locale";

interface Props {
    tabs: { href: string; label: string }[];
    localeData: LocaleData;
}

const Desktop = (props: Props) => {
    const { tabs, localeData } = props;

    return (
        <nav className="hidden md:block bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                            </Link>
                        </div>
                    
                    </div>

                    <div className=" space-x-8 sm:-my-px sm:ms-10 flex items-center">
                            {tabs.map((tab) => {
                                let isActive = route().current(tab.href);
                                
                                if(route().current() === "articles.show") {
                                    // Définit isActive à vrai uniquement pour 'articles.index'
                                    isActive = tab.href === "articles.index";
                                }
                                return (
                                    <NavLink
                                    key={tab.href}
                                    href={route(tab.href)}
                                    active={isActive}
                                >
                                    {tab.label}
                                </NavLink>
                                )
                            })}
                            <div className="h-full flex items-center">
                        <SwitchLocale currentLocale={localeData.languageCode} />
                    </div>
                        </div>
                </div>
            </div>

            {/* {user && (
            <div className="pt-4 pb-1 border-t border-gray-200">
                <div className="px-4">
                    <div className="font-medium text-base text-gray-800">
                        {user.name}
                    </div>
                    <div className="font-medium text-sm text-gray-500">
                        {user.email}
                    </div>
                </div>

                <div className="mt-3 space-y-1">
                    <ResponsiveNavLink href={route("profile.edit")}>
                        Profile
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        method="post"
                        href={route("logout")}
                        as="button"
                    >
                        Log Out
                    </ResponsiveNavLink>
                </div>
            </div>
        )} */}
        </nav>
    );
};

export default Desktop;
