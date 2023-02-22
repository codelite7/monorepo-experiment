resource "aws_cognito_user_pool" "app" {
  name = var.app_name
}

