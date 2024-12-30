export interface UserRegisterModel {
    fullName: string;
    password: string;
    email: string;
    birthDate: string | null;
    gender: 'Male' | 'Female'
    phoneNumber: string | null;
}