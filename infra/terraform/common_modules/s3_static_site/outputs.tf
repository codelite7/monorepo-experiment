output "validated_acm_certificate_arn" {
  value = aws_acm_certificate_validation.site.certificate_arn
}

output "hosted_zone_id" {
  value = data.aws_route53_zone.site.id
}