import {User} from "@/_models/user";

export class Article {
    id: number;
    title: string;
    description: string;
    agreed_with_terms_and_conditions: string;
    author: number;
    status: string;
    created_at: string;
    updated_at: string;
}
