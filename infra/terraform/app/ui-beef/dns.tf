data "aws_route53_zone" "ui-beef" {
  name         = var.domain
  private_zone = false
}

resource "aws_route53_record" "ui-beef" {
  for_each = {
    for dvo in aws_acm_certificate.ui-beef.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.ui-beef.zone_id
}

resource "aws_route53_record" "root-a" {
  zone_id = data.aws_route53_zone.ui-beef.zone_id
  name    = var.domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.ui-beef.domain_name
    zone_id                = aws_cloudfront_distribution.ui-beef.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www-a" {
  zone_id = data.aws_route53_zone.ui-beef.zone_id
  name    = "www.${var.domain}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.ui-beef.domain_name
    zone_id                = aws_cloudfront_distribution.ui-beef.hosted_zone_id
    evaluate_target_health = false
  }
}