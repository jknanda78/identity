export interface HttpReqPayload {
  data: Object;
  method: "get" | "post";
  url: string;
}

export interface HttpRequestModel {
  isSubmitting: boolean;
}
