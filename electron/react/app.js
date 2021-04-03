function Hello(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello React!"), /*#__PURE__*/React.createElement("p", null, "Hello ", props.name, "!"));
}

const app = /*#__PURE__*/React.createElement(Hello, {
  name: "Brooks"
});
ReactDOM.render(app, document.getElementById("app"));