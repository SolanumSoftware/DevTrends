import { Category } from "../Types/category.types";

export class Articles {
    id?:            string;
    tittle:         string;
    description:    string;
    datePublish:    string;
    autor:          string;
    url:            string;
    category:       Category;
}