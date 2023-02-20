variable "environment" {
  description = "which environment is this?"
}

variable "bucket_prefix" {
  description = "prefix for s3 bucket names"
}

variable "dist_path" {
  description = "path to dist contents that should be uploaded to s3"
}

variable "domain" {
  description = "the top level domain to use for this deployment"
}

variable subject_alternative_names {
  description = "SANs to add to the site's ssl certificate"
  default     = []
}

variable site_name {
  description = "name to use when naming resources"
}