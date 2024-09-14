import { usePage } from "@inertiajs/react";
import { User } from "@/types";
import { LocaleData } from "@/types/locale";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
    const {} = props;
    const auth = usePage().props.auth as { user: User };
    const user = auth.user as User;

    const localeData = usePage().props.localeData as LocaleData;
    // const { data } = localeData;
    const tabs = [
        { href: "home", label: "Accueil" },
        { href: "fo.articles.index", label: "Articles" },
    ];

    return (
        <>
        <Desktop tabs={tabs} localeData={localeData}/>
        <Mobile tabs={tabs} />
        </>

    );
};

export default Navbar;
