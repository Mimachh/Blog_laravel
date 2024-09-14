import { useForm } from "@inertiajs/react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./select";
// import axios from 'axios';

const SwitchLocale = ({ currentLocale }: { currentLocale: string }) => {
    const { data, processing, errors, post, reset } = useForm({
        locale: currentLocale,
    });

    const submit = (locale: string) => {
        data.locale = locale;
        post(route("fo.change-locale"), {
            onSuccess: () => {
                // window.location.reload();
            },
            onError: (e) => {
                // console.log(e);
                // reset();
            },
        });
    };

    const locales = [
        { id: "en", name: "English" },
        { id: "fr", name: "Français" },
    ];
    return (
        <div>
            <Select
                key={data.locale}
                onValueChange={(e) => {
                    submit(e);
                }}
                defaultValue={data.locale}
            >
                <SelectTrigger>
                    <SelectValue
                        defaultValue={data.locale}
                        placeholder="Choisir une langue"
                    />
                </SelectTrigger>
                <SelectContent id="locale">
                    {locales.map((locale) => (
                        <SelectItem key={locale.id} value={locale.id}>
                            {locale.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default SwitchLocale;
