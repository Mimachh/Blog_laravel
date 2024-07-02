
import parser from "html-react-parser";
import { PageProps } from "@/types";
import BlogLayout from "@/Layouts/BlogLayout";

type Props = PageProps & {
    article: {
        data: any;
    };
};

const Show = (props: Props) => {
    const { article } = props;
    return (
        <div>
            <div className="bg-background lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 bg-white min-h-screen p-4">
                    <p className="text-base font-semibold leading-7 text-indigo-600">
                        {article.data.category.name}
                    </p>
                    <h1 className=" mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {article.data?.title ?? ""}
                    </h1>
                    <p className="mt-6 text-xl leading-8 tiptap">
                        {article.data.content && parser(article.data.content)}
                    </p>         
                </div>
            </div>
        </div>
    );
};

export default Show;
Show.layout = (page: React.ReactNode) => {
    return <BlogLayout>{page}</BlogLayout>;
};
