// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello from React.js"
// );
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i h1"),
    React.createElement("h2", {}, "ble ble"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i h1"),
    React.createElement("h2", {}, "ble ble"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
