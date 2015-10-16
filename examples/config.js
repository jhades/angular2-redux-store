System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "typescript": "npm:typescript@1.6.2"
  }
});
