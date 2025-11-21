export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    permissions?: string[]
}
export type DefaultFlash = {
    created_project?: {
      id: number;
    };
  };

export * from './team';
export * from './project';
export * from './member';

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
    F = DefaultFlash
> = T & {
    auth: {
        user: User;
    };
    flash: F;
};
