terraform {
  backend "s3" {
    bucket = "swarm-io-terraform-state"
    key    = "terraform.tfstate"
    region = "us-west-2"
  }
}