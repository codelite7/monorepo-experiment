resource "aws_acm_certificate" "ui-beef" {
  provider = aws.acm # this uses a separate provider because acm requires certs be created in us-east-1
  domain_name       = var.domain
  validation_method = "DNS"
}

resource "aws_acm_certificate_validation" "ui-beef" {
  provider = aws.acm # this uses a separate provider because acm requires certs be created in us-east-1
  certificate_arn         = aws_acm_certificate.ui-beef.arn
  validation_record_fqdns = [for record in aws_route53_record.ui-beef : record.fqdn]
}