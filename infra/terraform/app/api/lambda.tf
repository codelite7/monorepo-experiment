data "archive_file" "lambda_zip" {
  type        = "zip"
  source_file = "../../apps/api/api"
  output_path = "api.zip"
}

resource "aws_lambda_function" "api" {
  filename          = data.archive_file.lambda_zip.output_path
  function_name     = "api"
  role              = aws_iam_role.iam_for_lambda.arn
  handler           = "api"
  source_code_hash  = filebase64sha256(data.archive_file.lambda_zip.output_path)
  runtime           = "go1.x"
  memory_size       = 1024
  timeout           = 30

}

resource "aws_lambda_permission" "apigw" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.api.function_name
  principal     = "apigateway.amazonaws.com"

  # The /*/* portion grants access from any method on any resource
  # within the API Gateway "REST API".
  source_arn = "${aws_api_gateway_rest_api.api.execution_arn}/*/*"
}