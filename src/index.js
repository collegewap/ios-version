import "./styles.css";

var checkVersion = function () {
  var agent = window.navigator.userAgent,
    start = agent.indexOf("OS ");
  if (
    (agent.indexOf("iPhone") > -1 || agent.indexOf("iPad") > -1) &&
    start > -1
  ) {
    return window.Number(agent.substr(start + 3, 3).replace("_", "."));
  }
  return 0;
};

var version = checkVersion();

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
${version}
</div>
`;
