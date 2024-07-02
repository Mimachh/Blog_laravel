import { useState, PropsWithChildren, ReactNode } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { PageProps, User } from "@/types";
import Navbar from "@/Components/navigation/Navbar";
import ScrollWatcher from "@/Components/ui/scroll-watcher";
import { LazyMotion, domAnimation } from "framer-motion";

type BlogLayoutProps = {
    header?: ReactNode;
    children: ReactNode;
};
export default function BlogLayout(props: BlogLayoutProps) {
    const { header, children } = props;
    return (

        <div className="min-h-screen bg-white">
            <LazyMotion features={domAnimation}>
            <Navbar />
            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>
                <ScrollWatcher />
                {children}
            </main>
            </LazyMotion>
        </div>
    );
}
