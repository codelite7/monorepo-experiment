resource "aws_cognito_user_pool" "app" {
  name = var.app_name
  username_configuration {
    case_sensitive = false
  }
  auto_verified_attributes = ["email"]
  user_attribute_update_settings {
    attributes_require_verification_before_update = ["email"]
  }
  alias_attributes = ["email"]
  schema {
    name = "email"
    attribute_data_type = "String"
    required = true
    mutable = false
    string_attribute_constraints {
      min_length = 1
      max_length = 256
    }
  }
}

resource "aws_cognito_user_pool_client" "app" {
  name = var.app_name
  user_pool_id = aws_cognito_user_pool.app.id
}

