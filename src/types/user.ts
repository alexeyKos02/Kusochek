export interface User {
    id: number
    email: string | null
    userName: string | null
}

export interface UserState {
    user: User | null
    loading: boolean
    error: string | null
}
