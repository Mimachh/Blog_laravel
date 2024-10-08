import { Badge } from "@/Components/ui/badge";
import BlogLayout from "@/Layouts/BlogLayout";
import { PageProps } from "@/types";
import { Article } from "@/types/article";
import { LocaleData } from "@/types/locale";
import { Link, usePage } from "@inertiajs/react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

type Props = PageProps & {
    articles: {
        data: Article[];
    };
};

const Index = (props: Props) => {
    const { articles } = props;

    const localeData = usePage().props.localeData as LocaleData;
    const { data } = localeData;

    return (
        <div>
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {data["blog_list"].title}
                        </h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Learn how to grow your business with our expert
                            advice.
                        </p>
                    </div>
                    <div className="grid grid-cols-12 gap-3">
                        <div className="border col-span-3 mt-12">

                        </div>
                        <div className="col-span-9">
                            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                {articles.data &&
                                    articles.data.map((article) => {
                                        const formattedDate = format(
                                            new Date(article.updated_at),
                                            "dd/MM/yy",
                                            { locale: fr }
                                        );
                                        const publishedText = data[
                                            "date"
                                        ].published_at.replace(
                                            "{date}",
                                            formattedDate
                                        );
                                        return (
                                            <article
                                                key={article.id}
                                                className="flex flex-col items-start justify-between"
                                            >
                                                <div className="relative w-full">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                                                        alt=""
                                                        className="aspect-[16/9] w-full rounded-lg object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                                    />
                                                    <div className="absolute inset-0 rounded-lg shadow-sm" />
                                                </div>
                                                <div className="max-w-xl">
                                                    <div className="mt-4 flex items-center gap-x-4 text-xs">
                                                        <time
                                                            dateTime={
                                                                article.updated_at
                                                            }
                                                            className="text-gray-500"
                                                        >
                                                            {publishedText}
                                                        </time>
                                                        <Badge
                                                            variant={"accent"}
                                                        >
                                                            <p className="">
                                                                {
                                                                    article
                                                                        .category
                                                                        .name
                                                                }
                                                            </p>
                                                        </Badge>
                                                    </div>
                                                    <div className="group relative">
                                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                                            <Link
                                                                href={route(
                                                                    "fo.articles.show",
                                                                    {
                                                                        slug: article.slug,
                                                                    }
                                                                )}
                                                            >
                                                                <span className="absolute inset-0" />
                                                                {article.title}
                                                            </Link>
                                                        </h3>
                                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                                            {
                                                                article.description
                                                            }
                                                        </p>
                                                    </div>
                                                    {/* <div className="relative mt-8 flex items-center gap-x-4">
                                                <img
                                                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                    className="h-10 w-10 rounded-full bg-gray-100"
                                                />
                                                <div className="text-sm leading-6">
                                                    <p className="font-semibold text-gray-900">
                                                        <a href="">
                                                            <span className="absolute inset-0" />
                                                            {article.user.name}
                                                        </a>
                                                    </p>
                                                </div>
                                            </div> */}
                                                </div>
                                            </article>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;

Index.layout = (page: React.ReactNode) => {
    return <BlogLayout>{page}</BlogLayout>;
};
