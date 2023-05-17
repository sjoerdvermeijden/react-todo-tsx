import { ContainerWrapper } from "./Style";

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
