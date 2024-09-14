
import { DataTable } from "@/Components/bo/articles/data-table";
import { Button } from "@/Components/ui/button";
import AdminLayout from "@/Layouts/AdminLayout";
import type { PageProps } from "@/types";
import type { Article } from "@/types/article";
import { Plus } from "lucide-react";
import React from "react";
import { router } from '@inertiajs/react'
import { getArticleColumns } from "@/Components/bo/articles/columns";

type Props = PageProps & {
    articles: {
        data: Article[];
    };
    can: {
        edit: boolean;
    };
};

const Index = (props: Props) => {
    const { articles, can } = props;
    const articleColumns = getArticleColumns({ can });
    return (
        <div>
            <div className=" mb-12 flex items-center justify-between">
                <h1 className="font-bold text-3xl">Articles</h1>
                <Button
                variant={"outline"}
                size={"sm"}
                onClick={() => {
                  router.visit(route('bo.articles.create'))
                }}><Plus className="w-6 h-6" /></Button>
            </div>
            <DataTable columns={articleColumns} data={articles.data} />
        </div>
    );
};

Index.layout = (page: React.ReactNode) => {
    return <AdminLayout>{page}</AdminLayout>;
};

export default Index;
