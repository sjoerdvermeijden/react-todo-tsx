import { HeaderWrapper } from "./Style";

import Wrap from "../Wrap/Wrap";

function Header() {
  return (
    <>
      <HeaderWrapper>
        <Wrap>
          <div className="main-inner">
            <h1>Header</h1>
          </div>
        </Wrap>
      </HeaderWrapper>
    </>
  );
}

export default Header;
