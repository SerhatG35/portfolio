export type GithubRepoTypes = {
    id: number
    name: string
    homepage: string
    created_at: string
}[]

export type ContactInputTypes = {
    subject: string
    name: string
    email: string
    message: string
}

export type BlogTypes = {
    title: string
    id: string
    readable_publish_date: string
    cover_image: string
    tag_list: string[]
    positive_reactions_count: number
    comments_count: number
    reading_time_minutes: number
    url: string
    description: string
}
