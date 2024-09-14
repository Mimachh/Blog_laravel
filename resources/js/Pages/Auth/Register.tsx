import RegisterForm from "@/Components/auth/RegisterForm";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head} from "@inertiajs/react";

export default function Register() {


    return (
        <GuestLayout
        title="Inscription"
        >
            <Head title="Inscription" />

           <RegisterForm />
        </GuestLayout>
    );
}