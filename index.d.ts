import React from "react";

export default BackToTop;
declare function BackToTop(props: any): JSX.Element;
declare namespace BackToTop {
  namespace propTypes {
    const children: React.ReactChild;
    const className: string;
    const onClick: any;
    const alwaysVisible: boolean;
    const showAfterRef: React.Ref<any>;
  }
}
