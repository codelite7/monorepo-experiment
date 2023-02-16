module "ui-admin-angular" {
  source  = "./ui-admin-angular"
  environment = var.environment
}

module "ui-beef" {
  source  = "./ui-beef"
  environment = var.environment
}