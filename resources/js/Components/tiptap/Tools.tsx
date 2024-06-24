import React from 'react'
import { Button } from '../ui/button'
import { useCurrentEditor } from '@tiptap/react';
import { Icon } from '../Icon';

const Tools = () => {

    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

  return (
    <div className="control-group">
    <div className="flex flex-wrap items-center gap-2 p-2 border-b  bg-secondary">
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
        >
            <Icon name="bold" size="sm" className="stroke-2" />
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={
                !editor.can().chain().focus().toggleItalic().run()
            }
            className={editor.isActive("italic") ? "is-active" : ""}
        >
            <Icon name="italic" size="sm" />
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={
                !editor.can().chain().focus().toggleStrike().run()
            }
            className={editor.isActive("strike") ? "is-active" : ""}
        >
            <Icon name="strike" size="md" className="stroke-[0.01]" />
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className={editor.isActive("code") ? "is-active" : ""}
        >
            Code
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() => editor.chain().focus().unsetAllMarks().run()}
        >
            Clear marks
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() => editor.chain().focus().clearNodes().run()}
        >
            Clear nodes
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive("paragraph") ? "is-active" : ""}
        >
            <Icon name="paragraph" size="md" />
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
                editor.isActive("heading", { level: 1 })
                    ? "is-active"
                    : ""
            }
        >
            H1
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
                editor.isActive("heading", { level: 2 })
                    ? "is-active"
                    : ""
            }
        >
            H2
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
                editor.isActive("heading", { level: 3 })
                    ? "is-active"
                    : ""
            }
        >
            H3
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() =>
                editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={
                editor.isActive("heading", { level: 4 })
                    ? "is-active"
                    : ""
            }
        >
            H4
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() =>
                editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={
                editor.isActive("heading", { level: 5 })
                    ? "is-active"
                    : ""
            }
        >
            H5
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() =>
                editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={
                editor.isActive("heading", { level: 6 })
                    ? "is-active"
                    : ""
            }
        >
            H6
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() =>
                editor.chain().focus().toggleBulletList().run()
            }
            className={editor.isActive("bulletList") ? "is-active" : ""}
        >
            Bullet list
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() =>
                editor.chain().focus().toggleOrderedList().run()
            }
            className={
                editor.isActive("orderedList") ? "is-active" : ""
            }
        >
            Ordered list
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() =>
                editor.chain().focus().toggleCodeBlock().run()
            }
            className={editor.isActive("codeBlock") ? "is-active" : ""}
        >
            Code block
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() =>
                editor.chain().focus().toggleBlockquote().run()
            }
            className={editor.isActive("blockquote") ? "is-active" : ""}
        >
            <Icon name="quote" className="" size="md" />
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() =>
                editor.chain().focus().setHorizontalRule().run()
            }
        >
            Horizontal rule
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() => editor.chain().focus().setHardBreak().run()}
        >
            Hard break
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
        >
            Undo
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
        >
            Redo
        </Button>
        <Button
            variant={"ghost"}
            type='button'
            size={"xs"}
            onClick={() =>
                editor.chain().focus().setColor("#958DF1").run()
            }
            className={
                editor.isActive("textStyle", { color: "#958DF1" })
                    ? "is-active"
                    : ""
            }
        >
            Purple
        </Button>
    </div>
</div>
  )
}

export default Tools