export interface Column{
    title?: string;
    type?: string;
    action?: (args?: any) => void;
    field?: any;
    icon?: string;  
    width?: string;  
    classNames?: string;
    alt?: string;
}

export interface Cell{
    cellProps: Column;
    item: any;
}