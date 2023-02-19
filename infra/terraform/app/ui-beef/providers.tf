terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "4.53.0"
    }
  }
}

provider "aws" {
  region = "us-west-2"
}

# acm requires certs and validations are in us-east-1 for some weird reason. This provider creates resources in us-east-1
# which allows us to create certs there, and other resources in us-west-2
provider "aws" {
  alias = "acm"
  region = "us-east-1"
}