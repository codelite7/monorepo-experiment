variable "environment" {
  description = "which environment is this?"
}

variable "bucket_prefix" {
  description = "prefix for s3 bucket names"
}

variable "domain" {
  description = "the top level domain to use for this deployment"
}

variable subject_alternative_names {
  description = "SANs to add to the site's ssl certificate"
  default     = []
}