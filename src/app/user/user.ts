export interface User {

    // TODO implement email as Email type
    // TODO create enum for name prefixes

    id: number;
    firstName: string;
    lastName: string;
    title?: string;
    email: string;
    isLoggedIn?: boolean;

}
