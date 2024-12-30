export interface CreatePostDTO {
    title: string
    description: string
    readingTime: number
    image?: string
    addressId?: string
    tags: string[]
}