module "nonprod" {
  source  = "./app"
  environment = "nonprod"
  bucket_prefix = "monorepo-experiment"
  domain = "derp.ninja"
  api_certificate_arn = module.nonprod.ui_beef_validated_acm_certificate_arn
  api_hosted_zone_id = module.nonprod.ui_beef_hosted_zone_id
  subject_alternative_names = ["*.derp.ninja"]
  app_name = "derp_ninja"
}