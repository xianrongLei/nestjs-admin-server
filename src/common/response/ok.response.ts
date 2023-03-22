type Options = { statusCode?: number; message?: string }

export class OK<T> {
  constructor(data: T, options?: Options) {
    this.data = data
    this.statusCode = options?.statusCode || 200
    this.message = options?.message || "success"
  }
  statusCode!: number
  message!: string
  data!: T
}
