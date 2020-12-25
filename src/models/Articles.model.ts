import { Category } from "../Types/category.types";

export class Articles {
    id?:            string;
    tittle:         string;
    description:    string;
    datePublish:    string;
    url:        string;
    category:       Category;
}