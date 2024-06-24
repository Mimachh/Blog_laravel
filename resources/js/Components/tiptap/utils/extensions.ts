import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";



import {createLowlight} from 'lowlight'
const lowlight = createLowlight()

import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import dockerfile from 'highlight.js/lib/languages/dockerfile'
import php from 'highlight.js/lib/languages/php'




lowlight.register('html', html)
lowlight.register('css', css)
lowlight.register('js', js)
lowlight.register('ts', ts)
lowlight.register('dockerfile', dockerfile)
lowlight.register('php', php)

export const toolsExtensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    // @ts-ignore
    TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
        bulletList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
    }),
    CodeBlockLowlight.configure({
        lowlight,
        // languageClassPrefix: 'js-',
        // defaultLanguage: 'php',
      })
];