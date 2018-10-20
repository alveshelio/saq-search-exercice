import * as React from "react";

interface NoMatchProps {
  location: Location;
}

const NoMatch: React.SFC<NoMatchProps> = ({ location }) => (
  <div>
    <h1>
      No match for <code>{location.pathname}</code>
    </h1>
  </div>
);

export default NoMatch;
