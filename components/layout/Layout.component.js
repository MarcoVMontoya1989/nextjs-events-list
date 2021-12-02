import {Fragment} from "react";
import MainHeaderComponent from "./MainHeader.component";

const LayoutComponent = (props) => {
  return (
    <Fragment>
      <MainHeaderComponent />
      <main>
        {props.children}
      </main>
    </Fragment>
  );
};

export default LayoutComponent;