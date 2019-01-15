package(default_visibility = ["//visibility:public"])

load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")
load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")
nodejs_binary(
    name = "testapp",
    node_modules = "@npm//:node_modules",
    data = ["app.js"],
    entry_point = "npm/node_modules/hubot/bin/hubot.js",
    templated_args = [
      "--name \"testbot\"",
      "--adapter slack",
      "\"$@\"",
    ]
)
