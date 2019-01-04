package(default_visibility = ["//visibility:public"])

#load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")
#nodejs_binary(
#    name = "testapp",
#    node_modules = "@npm//:node_modules",
#    data = ["app.js"],
#    entry_point = "bazel_testing/src/app.js",
#)

load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")
nodejs_image(
    name = "testapp",
    node_modules = "@npm//:node_modules",
    data = ["app.js"],
    entry_point = "bazel_testing/src/app.js",
)
