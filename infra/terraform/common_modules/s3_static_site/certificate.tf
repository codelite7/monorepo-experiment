resource "aws_acm_certificate" "site" {
  provider = aws.acm # this uses a separate provider because acm requires certs be created in us-east-1
  domain_name       = var.domain
  subject_alternative_names = var.subject_alternative_names
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "site" {
  provider = aws.acm # this uses a separate provider because acm requires certs be created in us-east-1
  certificate_arn         = aws_acm_certificate.site.arn
  validation_record_fqdns = [for record in aws_route53_record.site : record.fqdn]
}