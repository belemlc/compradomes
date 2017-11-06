export interface DaoInterface<T> {
    
    all(): Promise<T[]>;
    create(object: T): Promise<T>;
    read(): Promise<T>;
    update(id: number): Promise<T>;
    delete(id: number): Promise<T>;
    
}