export interface AuthorDTO {
    fullName: string;
    birthDate: string | null;
    gender: 'Male' | 'Female';
    posts: number;
    likes: number;
    created: string;
}