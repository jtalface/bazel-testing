package(default_visibility = ["//visibility:public"])

load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")
nodejs_image(
    name = "testapp",
    node_modules = "@npm_deps//:node_modules",
    data = [":src/app.js"],
    entry_point = "src/app.js",
)
