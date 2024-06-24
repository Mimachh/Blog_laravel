import { Link, Head, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";

import Tiptap from "@/Components/TipTap";
import { useState } from "react";
import parser from "html-react-parser";

import { createLowlight } from "lowlight";
// const lowlight = createLowlight()

// import css from 'highlight.js/lib/languages/css'
// import js from 'highlight.js/lib/languages/javascript'
// import ts from 'highlight.js/lib/languages/typescript'
// import html from 'highlight.js/lib/languages/xml'
// import dockerfile from 'highlight.js/lib/languages/dockerfile'
// import php from 'highlight.js/lib/languages/php'
// import plaintext from 'highlight.js/lib/languages/plaintext'

// lowlight.register('html', html)
// lowlight.register('css', css)
// lowlight.register('js', js)
// lowlight.register('ts', ts)
// lowlight.register('dockerfile', dockerfile)
// lowlight.register('php', php)
// lowlight.register('plaintext', plaintext)
export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const [desc, setDesc] = useState("");
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        content: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("articles.store"));
    };
    // const renderCode = ({ language, value }) => {
    //     const highlighted = lowlight.highlight(language, value).value;
    //     return <pre><code dangerouslySetInnerHTML={{ __html: highlighted }} /></pre>;
    // };

    // Function to handle parsing and highlighting
    // const parseOptions = {
    //     replace: (domNode) => {
    //         if (
    //             domNode.name === 'pre' &&
    //             domNode.children &&
    //             domNode.children[0] &&
    //             domNode.children[0].name === 'code'
    //         ) {
    //             console.log("Found <pre><code> block:", domNode);
    //             const language = domNode.children[0].attribs.class?.split('-')[1] || 'js';
    //             const code = domNode.children[0].children && domNode.children[0].children[0] && domNode.children[0].children[0].data || '';
    //             console.log("Language:", language);
    //             console.log("Code:", code);
    //             return renderCode({ language, value: code });
    //         }
    //     },
    // };
    return (
        <>
            <Head title="Welcome" />
            <div className="mx-auto max-w-3xl">
                <div className="mt-4">
                    <Tiptap setDesc={setDesc} />

                    <div className="tiptap">{parser(desc)}</div>
                </div>
            </div>
        </>
    );
}
