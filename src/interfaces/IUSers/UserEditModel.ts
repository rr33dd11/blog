export interface UserEditModel {
    email: string;
    fullName: string;
    birthDate: string | null;
    gender : 'Male' | 'Female';
    phoneNumber: string | null;
}