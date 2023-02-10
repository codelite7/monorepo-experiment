locals {
  mime_types = {
    "css"  = "text/css"
    "html" = "text/html"
    "ico"  = "image/vnd.microsoft.icon"
    "js"   = "application/javascript"
    "json" = "application/json"
    "map"  = "application/json"
    "png"  = "image/png"
    "svg"  = "image/svg+xml"
    "txt"  = "text/plain"
    "jpg" = "image/jpeg"
    "woff" = "font/woff"
    "webp" = "image/webp"
    "ttf" = "font/ttf"
    "eot" = "application/vnd.ms-fontobject"
  }
}

resource "aws_s3_bucket" "swarm-io-ui-beef" {
  bucket = "swarm-io-ui-beef-${var.environment}"
  tags = {
    Name        = "ui-beef"
    Environment = var.environment
  }
}

resource "aws_s3_bucket_acl" "ui-beef" {
  bucket = aws_s3_bucket.swarm-io-ui-beef.bucket
  acl    = "public-read"
}

resource "aws_s3_bucket_website_configuration" "ui-beef" {
  bucket = aws_s3_bucket.swarm-io-ui-beef.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_object" "object" {
  for_each = fileset("../../apps/ui-beef/dist/ui-beef", "**")
  bucket = aws_s3_bucket.swarm-io-ui-beef.bucket
  key = each.value
  source = "../../apps/ui-beef/dist/ui-beef/${each.value}"
  etag = filemd5("../../apps/ui-beef/dist/ui-beef/${each.value}")
  acl = aws_s3_bucket_acl.ui-beef.acl
  content_type = lookup(tomap(local.mime_types), element(split(".", each.key), length(split(".", each.key)) - 1))
}