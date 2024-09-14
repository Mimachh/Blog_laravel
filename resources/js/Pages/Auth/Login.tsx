import LoginForm from "@/Components/auth/LoginForm";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";


export default function Login({
    status,
    canResetPassword = true,
}: {
    status?: string;
    canResetPassword?: boolean;
}) {
   

    return (
        <GuestLayout
        title="Connexion"
        >
            <Head title="Connexion" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <LoginForm />
        </GuestLayout>
    );
}