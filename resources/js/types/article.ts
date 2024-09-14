import { User } from ".";
import { Category } from "./category";

export interface Article {
    id: number;
    title: string;
    content: string;
    user_id: number;
    description: string;
    slug: string;
    updated_at: string;
    category: Category;
    user: User;
}

export interface EditArticle {
    id: number;
    title: string;
    content: string;
    user_id: number;
    description: string;
    slug: string;
    updated_at: string;
    category: Category;
    user: User;
    isActive: boolean;
    category_id: number;
    translation: Translation[];
}

export interface Translation {
    [key: string]: {
        id: number;
        local: string;
        title: string;
        content: string;
        slug: string;
        description: string;
    };
}
