export interface Column{
    title: string;
    type?: string;
    action?: (args?: any) => void;
    field?: any;
    icon?: string;  
    width?: string;  
}