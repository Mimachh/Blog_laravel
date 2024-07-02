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
    user: User
}