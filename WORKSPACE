load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

git_repository(
    name = "bazel_skylib",
    remote = "https://github.com/bazelbuild/bazel-skylib.git",
    tag = "0.6.0",
)

# Can't seem to find the tag for this repo, not sure why
#git_repository(
#    name = "io_bazel_rules_docker",
#    remote = "https://github.com/bazelbuild/rules_docker.git",
#    tag = "0.6.0",
#)

http_archive(
    name = "io_bazel_rules_docker",
    strip_prefix = "rules_docker-0.6.0",
    urls = ["https://github.com/bazelbuild/rules_docker/archive/v0.6.0.tar.gz"],
    sha256 = "c0e9d27e6ca307e4ac0122d3dd1df001b9824373fb6fb8627cd2371068e51fef",
)

git_repository(
    name = "build_bazel_rules_nodejs",
    remote = "https://github.com/bazelbuild/rules_nodejs.git",
    tag = "0.16.2",
)

load("@build_bazel_rules_nodejs//:package.bzl", "rules_nodejs_dependencies")
rules_nodejs_dependencies()

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "npm_install")

node_repositories(package_json = ["//:package.json"])
npm_install(
    name = "npm_deps",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.json",
)

load(
    "@io_bazel_rules_docker//nodejs:image.bzl",
    _nodejs_image_repos = "repositories",
)

_nodejs_image_repos()

