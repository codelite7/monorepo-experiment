export interface Header {
  name: string;
  value: string;
}

export interface WebhookAction {
  id: string;
  name: string;
  method: string;
  url: string;
  verify_tls_certificate: boolean;
  max_concurrent_requests: number;
  headers: Header[];
  success_codes: number[];
  retry_interval: number;
  max_retries: number;
}

export const WebhookActionSuccessCodes = [200, 201, 202, 203, 204, 205, 206, 207, 208, 226];
