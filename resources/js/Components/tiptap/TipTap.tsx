import { EditorProvider } from "@tiptap/react";
import Tools from "./Tools";
import { toolsExtensions } from "./utils/extensions";

interface TipTapFormProps {
    content: string;
    onChange: (content: string) => void;
}

const TipTap = (props: TipTapFormProps) => {
    const { content, onChange } = props;

    return (
        <div className="border rounded-md overflow-hidden">
            <EditorProvider
                slotBefore={<Tools />}
                extensions={toolsExtensions}
                content={content}
                onUpdate={({ editor }) => {
                    onChange(editor.getHTML());
                }}
            ></EditorProvider>
        </div>
    );
};

export default TipTap;