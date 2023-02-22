variable "environment" {
  description = "which environment is this? options are 'nonprod' or 'prod'"
  default = "nonprod"
  validation {
    condition = var.environment == "nonprod" || var.environment == "prod"
    error_message = "environment must be either 'nonprod' or 'prod'"
  }
}

variable "domain" {
  description = "the top level domain to use for this deployment"
}

variable "bucket_prefix" {
  description = "prefix for s3 bucket names"
}

variable subject_alternative_names {
  description = "SANs to add to the site's ssl certificate"
  default     = []
}

variable "api_hosted_zone_id" {
  description = "hosted zone for the api domain"
}

variable "api_certificate_arn" {
  description = "acm certificate arn for the api domain"
}

variable "app_name" {
  description = "app name to use when naming and tagging resources"
}