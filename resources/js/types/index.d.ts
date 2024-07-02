export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    // localeData: {
    //     locales: {
    //         [key: string]: string;
    //     };
    //     languageCode: string;
    // }
    auth: {
        user: User;
    };
};
