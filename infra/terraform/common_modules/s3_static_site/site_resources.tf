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

resource "aws_s3_bucket" "site" {
  bucket = "${var.bucket_prefix}-${var.site_name}-${var.environment}"
  tags = {
    Name        = var.site_name
    Environment = var.environment
  }
}

resource "aws_s3_bucket_acl" "site" {
  bucket = aws_s3_bucket.site.bucket
  acl    = "public-read"
}

resource "aws_s3_bucket_website_configuration" "site" {
  bucket = aws_s3_bucket.site.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_object" "object" {
  for_each = fileset(var.dist_path, "**")
  bucket = aws_s3_bucket.site.bucket
  key = each.value
  source = "${var.dist_path}/${each.value}"
  etag = filemd5("${var.dist_path}/${each.value}")
  acl = aws_s3_bucket_acl.site.acl
  content_type = lookup(tomap(local.mime_types), element(split(".", each.key), length(split(".", each.key)) - 1))
}
