import styled from "styled-components";

import Layout from "./components/Layout/Layout";
import Block from "./components/Block/Block";
import Wrap from "./components/Wrap/Wrap";
import Container from "./components/Container/Container";

import Form from "./components/Form/Form";
import List from "./components/List/List";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <>
      <Layout>
        <Block>
          <Wrap>
            <MainWrapper>
              <Container>
                <Form />
              </Container>
              <Container>
                <List />
              </Container>
            </MainWrapper>
          </Wrap>
        </Block>
      </Layout>
    </>
  );
}

export default App;
