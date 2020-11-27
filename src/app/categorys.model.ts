export type Category = 'All' | 'BackEnd' | 'FrontEnd' | 'DevOps' | 'Manifests' | 'Database' | 'Testing' | 'Networks' | 'Movil' | 'TeamWork' | 'BI' | 'IA' | 'Managment' | 'BigData' | 'Agile';
export interface MenuOptions {
    name: string;
    category: Category;
}

export const MENU_OPTIONS: MenuOptions[] = [
    { name: 'All Trends', category: 'All' },
    { name: 'BackEnd', category: 'BackEnd' },
    { name: 'FrontEnd', category: 'FrontEnd' },
    { name: 'DevOps', category: 'DevOps' },
    { name: 'Manifests', category: 'Manifests' },
    { name: 'Database', category: 'Database' },
    { name: 'Testing', category: 'Testing' },
    { name: 'Networks', category: 'Networks' },
    { name: 'Movil', category: 'Movil' },
    { name: 'Team Work', category: 'TeamWork' },
    { name: 'BI / Business Intelligence', category: 'BI' },
    { name: 'IA / Artificial Intelligence', category: 'IA' },
    { name: 'Managment', category: 'Managment' },
    { name: 'Big Data', category: 'BigData' },
    { name: 'Agile', category: 'Agile' }
];