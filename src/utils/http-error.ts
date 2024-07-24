interface IHttpError {
  message: string;
  statusCode: number;
  error: string;
}

export class HttpError extends Error {
  constructor(data: IHttpError) {
    console.log("🚀 ~ HttpError ~ constructor ~ data:", data);
    super(data?.message);
    this.name = data?.error;
  }
}
