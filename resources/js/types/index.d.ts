export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    permissions?: string[]
}
export * from './team';
export * from './project';

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };

};
