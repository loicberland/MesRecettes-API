import type { Request } from 'express'

export type UserData = {
    id: number
    lastname: string
    firstname: string
    email: string
    password?: string
    role: string
}

export interface LoginRequest extends Partial<Request> {
  body: {
    email: string
    password: string
  }
}
