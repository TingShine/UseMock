export type Nullable<T> = T | null

export type Voidable<T> = T | null | undefined

export interface IpcResponse<T> {
  data?: T
  error?: any
}

export interface wrapList<T> {
  total: number
  data: T[]
}

export interface IProject {
  id: string
  name: string
  status: 'success' | 'failure' | 'unactive'
  description: string
  prefix: string
  apis: any
}

export interface ISearchProjectParams {
  name?: string
  status?: 'success' | 'failure' | 'unactive'
  page?: number
  pageSize?: number
}

export interface ICreateProjectParams {
  name: string
  isActive?: boolean
  prefix?: string
  description?: string
}
