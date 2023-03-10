variable "environment" {
  description = "which environment is this for? options are 'dev' or 'prod'"
  default = "dev"
  validation {
    condition = var.environment == "dev" || var.environment == "prod"
    error_message = "environment must be either 'dev' or 'prod'"
  }
}