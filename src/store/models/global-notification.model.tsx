export interface GlobalNotificationModel {
  notify: boolean;
  notifyType: "error" | "warning" | "success" | "info";
  notifyMessage: string;
}

export interface GlobalNotificationPayload {
  notify: boolean;
  notifyType: "error" | "warning" | "success" | "info";
  notifyMessage: string;
}
