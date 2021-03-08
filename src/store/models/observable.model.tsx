export interface HttpReqModel {
  data: Object;
  method: "get" | "post";
  url: string;
  success: string;
}

export interface HttpRequestModel {
  isSubmitting: boolean;
}
