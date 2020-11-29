import { Category } from "../Types/category.types";

export class Articles {
    id?:            string;
    tittle:         string;
    description:    string;
    datePublish:    string;
    urlFile:        string;
    category:       Category;
}