variable "environment" {
  description = "which environment is this?"
}

variable "bucket_prefix" {
  description = "prefix for s3 bucket names"
}

variable "dist_path" {
  description = "path to dist contents that should be uploaded to s3"
  default = "../../apps/ui-beef/dist/ui-beef"
}

variable "domain" {
  description = "the top level domain to use for this deployment"
}