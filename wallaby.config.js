module.exports = function(wallaby) {
  return {
    files: ["src/**/*.js", "src/**/*.json"],
    tests: ["test/**/*.test.js"],
    env: {
      type: "node"
    }
  };
};
