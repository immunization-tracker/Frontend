import * as React from "react";

export default const Routes = {
  "/": () => <Home />,
  "/add-sub": () => <Sum />,
  "/bye": () => <Bye />,
  "/grow-shrink": () => <Size />,
  "/hide": () => <Hide />,
  "/align": () => <Align />,
  "/currentTime": () => <CurTime />,
  "/color": () => <Color />,
  "/random-color": () => <RandomColor />,
  "/hex-counter": () => <HexCounter />
};