const {WebClient} = require("@slack/client");

module.exports = function(robot) {
  const webClient = new WebClient(robot.adapter.options.token);

  robot.respond(/testing/i, (res) => res.send("I am yet another new test message!"));

  postBuildNotifications(robot, webClient);
}

function postBuildNotifications(robot, webClient) {
  // functionality snipped for test case
}
