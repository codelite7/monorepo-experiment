variable "environment" {
  description = "which environment is this? options are 'nonprod' or 'prod'"
  default = "nonprod"
  validation {
    condition = var.environment == "nonprod" || var.environment == "prod"
    error_message = "environment must be either 'nonprod' or 'prod'"
  }
}

variable "name" {
    description = "name to use when naming resources"
    default = "api"
}

variable "domain" {
  description = "the top level domain to use for this deployment"
}

variable "hosted_zone_id" {
  description = "hosted zone for the api domain"
}

variable "certificate_arn" {
  description = "acm certificate arn for the api domain"
}