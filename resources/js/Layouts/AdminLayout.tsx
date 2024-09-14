import { useState, PropsWithChildren, ReactNode } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { PageProps, User } from "@/types";
import { Sidebar } from "@/Components/bo/sidebar/sidebar";
import { useSidebarStore } from "@/hooks/bo/sidebar/useSidebarStore";
import { useSidebarToggle } from "@/hooks/bo/sidebar/useSidebarToggle";
import { cn } from "@/lib/utils";
import { Navbar } from "@/Components/bo/sidebar/navbar";
import ToastProvider from "@/providers/ToastProvider";

type AdminLayoutProps = {
    header?: ReactNode;
    children: ReactNode;
};
export default function AdminLayout(props: AdminLayoutProps) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const auth = usePage().props.auth as { user: User };
    const user = auth.user as User;
    const { header, children } = props;

    const sidebar = useSidebarStore(useSidebarToggle, (state) => state);
    if (!sidebar) return null;

    return (
        <div className="min-h-screen bg-muted">
               <Sidebar appName={"e"} />
               <ToastProvider>
            <main
                className={cn(
                    "min-h-[calc(100vh_-_56px)] bg-background transition-[margin-left] duration-300 ease-in-out dark:bg-zinc-900",
                    sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
                )}
            >
                <Navbar />
                <div className="p-5">
                {children}
                </div>
            </main>
            </ToastProvider>
        </div>
    );
}
