import menu from '../content/menu.json';
export type MenuItem = { name: string; desc: string };
export type MenuSection = { title: string; compact?: boolean; items: MenuItem[] };
export const menuSections = menu as MenuSection[];
export const section = (title: string) => menuSections.find((s) => s.title === title);
