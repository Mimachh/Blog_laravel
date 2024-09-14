import { useState } from "react";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";

import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { toast } from "sonner";
import axios from "axios";
import { router } from "@inertiajs/react";
import { Article } from "@/types/article";

interface CellActionProps {
    data: Article,
    can: {
        edit: boolean,
    }
}

export const CellAction: React.FC<CellActionProps> = ({
    data,
    can
}) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const onConfirm = async () => {
        // if (!can.unsubscribe) {
        //     toast.error(
        //         "Vous n'avez pas la permission de supprimer cet utilisateur"
        //     );
        //     return;
        // }
        // if (!restaurant) return;
        // try {
        //     setLoading(true);
        //     await axios.post(`/dashboard/${restaurant.id}/newsletter`, {
        //         id: data.id
        //     });

        //     toast.success("Utilisateur désinscrit");
        //     router.reload();
        // } catch (error) {
        //     console.log(error)
        //     toast.error(
        //         "Une erreur s'est produite lors de la suppression de l'utilisateur"
        //     );
        // } finally {
        //     setOpen(false);
        //     setLoading(false);
        // }
    };

    return (
        <>
            {/* <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onConfirm}
                loading={loading}
                title="Supression de la table"
                description="Êtes-vous sûr de vouloir supprimer cette table ? Cette action est irréversible."
            /> */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    {can.edit && (
                        <DropdownMenuItem
                            className="flex items-center gap-1 cursor-pointer text-destructive focus:text-red-600"
                            onClick={() => router.visit(route('bo.articles.edit', { id: data.id }))}
                        >
                            <Pencil className="w-4 h-4" />
                            Modifier
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};