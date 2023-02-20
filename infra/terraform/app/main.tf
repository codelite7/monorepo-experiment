module "ui-beef" {
  source  = "./ui-beef"
  environment = var.environment
  bucket_prefix = var.bucket_prefix
  domain = var.domain
  subject_alternative_names = var.subject_alternative_names
}

module "api" {
  source = "./api"
  domain = var.domain
  hosted_zone_id = var.api_hosted_zone_id
  certificate_arn = var.api_certificate_arn
}