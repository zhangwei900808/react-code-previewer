let babel_env = process.env["BABEL_ENV"];
let loose = false,
  modules = false,
  useESModules = false;

switch (babel_env) {
  case "commonjs":
    loose = true;
    modules = "cjs";
    useESModules = false;
    break;
  case "es":
    loose = true;
    modules = false;
    useESModules = true;
    break;
  case "umd":
    loose = false;
    modules = false;
    useESModules = false;
    break;
}

//useBuiltIns: true 如果为 true 且引入了polyfill
// (import "babel-polyfill"）的话，插件 会根据 targets 的配置，重写 import "babel-polyfill" ，
//只引入对应环境必须的 "babel-polyfill" 的子模块，减少了多余的代码引入
const presets = [["@babel/preset-env", { loose, modules }], "@babel/preset-react"];
const plugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-object-rest-spread",
  ["@babel/plugin-transform-runtime", { useESModules }],
  [
    "@babel/plugin-proposal-decorators",
    {
      legacy: true
    }
  ]
];
// 预览情况下添加对 antd 按需加载样式的支持
if (babel_env === "preview") {
  plugins.push([
    "import",
    {
      libraryName: "antd",
      libraryDirectory: "es",
      style: "css" // `style: true` 会加载 less 文件
    }
  ]);
}
module.exports = { presets, plugins };
