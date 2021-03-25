/* Defines the wine entity */
export interface Wine {
    id: number | null;
    wineryName: string;
    wineName: string;
    vintage: number | null;
    varietals: string[];
    appellation?: string;
    description?: string;
    starRating?: number;
}
