import React from "react";

import { ContainerWrapper } from "./Style";

import Form from "../Form/Form";
import List from "../List/List";

type Props = {
  children: any;
};

function Container({ children }: Props) {
  return (
    <>
      <ContainerWrapper>{children}</ContainerWrapper>
    </>
  );
}

export default Container;
