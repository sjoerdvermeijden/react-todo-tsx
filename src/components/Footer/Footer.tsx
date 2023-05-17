import { FooterWrapper } from "./Style";

import Wrap from "../Wrap/Wrap";

function Footer() {
  return (
    <div>
      <FooterWrapper>
        <Wrap>
          <div>
            <p>
              <span>Zie project in Github</span>
              <strong>
                <a
                  href="https://github.com/sjoerdvermeijden/react-todo-tsx"
                  target="_blank"
                >
                  hier
                </a>
              </strong>
            </p>
            <p>| Sjoerd Vermeijden</p>
          </div>
        </Wrap>
      </FooterWrapper>
    </div>
  );
}

export default Footer;
