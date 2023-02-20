module "ui-beef" {
  source  = "../../common_modules/s3_static_site"
  dist_path = "../../apps/ui-beef/dist/ui-beef"
  site_name = "ui-beef"
  domain = var.domain
  subject_alternative_names = var.subject_alternative_names
  environment = var.environment
  bucket_prefix = var.bucket_prefix
}