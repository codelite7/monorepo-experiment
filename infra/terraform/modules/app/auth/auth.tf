resource "aws_cognito_user_pool" "user_pool" {
  name = "ui-beef-user-pool-${var.environment}"
}

resource "aws_cognito_user_pool_client" "user_pool_client" {
  name = "ui-beef-${var.environment}"
  user_pool_id = aws_cognito_user_pool.user_pool.id
}