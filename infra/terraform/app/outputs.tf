output "base_url" {
  value = module.api.base_url
}

output "ui_beef_validated_acm_certificate_arn" {
  value = module.ui-beef.validated_acm_certificate_arn
}

output "ui_beef_hosted_zone_id" {
  value = module.ui-beef.hosted_zone_id
}