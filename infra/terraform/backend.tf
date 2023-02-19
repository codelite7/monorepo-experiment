terraform {
  backend "s3" {
    bucket = "monorepo-experiment-terraform-state"
    key    = "terraform.tfstate"
  }
}