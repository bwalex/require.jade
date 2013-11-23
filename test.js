define(['jade!test.jade'], function(render_test) {
  console.log("render_test:");
  console.log(render_test({names: ["Pete", "Myka"], bye: function(name) { return "Bye " + name + "!"; }}));
});
