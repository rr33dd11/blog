export interface UserDTO {
    id: string;
    createTime: string;
    fullName: string;
    birthDate: string | null;
    gender: 'Male' | 'Female';
    email: string;
    phoneNumber: string | null;
}