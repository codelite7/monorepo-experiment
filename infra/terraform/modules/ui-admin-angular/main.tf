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

resource "aws_s3_bucket" "swarm-io-ui-admin-angular" {
  bucket = "swarm-io-ui-admin-angular-${var.environment}"
  tags = {
    Name        = "ui-admin-angular"
    Environment = var.environment
  }
}

resource "aws_s3_bucket_acl" "ui-admin-angular" {
  bucket = aws_s3_bucket.swarm-io-ui-admin-angular.bucket
  acl    = "public-read"
}

resource "aws_s3_bucket_website_configuration" "ui-admin-angular" {
  bucket = aws_s3_bucket.swarm-io-ui-admin-angular.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_object" "object" {
  for_each = fileset("../../apps/ui-admin-angular/dist/app", "**")
  bucket = aws_s3_bucket.swarm-io-ui-admin-angular.bucket
  key = each.value
  source = "../../apps/ui-admin-angular/dist/app/${each.value}"
  etag = filemd5("../../apps/ui-admin-angular/dist/app/${each.value}")
  acl = aws_s3_bucket_acl.ui-admin-angular.acl
  content_type = lookup(tomap(local.mime_types), element(split(".", each.key), length(split(".", each.key)) - 1))
}