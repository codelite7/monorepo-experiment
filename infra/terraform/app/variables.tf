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