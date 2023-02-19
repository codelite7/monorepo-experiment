module "nonprod" {
  source  = "./app"
  environment = "nonprod"
  bucket_prefix = "monorepo-experiment"
  domain = "derp.ninja"
}