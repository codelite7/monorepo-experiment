module "ui-admin-angular-dev" {
  source  = "./modules/ui-admin-angular"
  environment = "dev"
}

module "ui-beef-dev" {
  source  = "./modules/ui-beef"
  environment = "dev"
}

#module "ui-admin-angular-prod" {
#  source  = "./modules/ui-admin-angular"
#  environment = "prod"
#}