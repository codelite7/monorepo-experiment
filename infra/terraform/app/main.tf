module "ui-beef" {
  source  = "./ui-beef"
  environment = var.environment
  bucket_prefix = var.bucket_prefix
  domain = var.domain
}