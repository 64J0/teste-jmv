import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  height: 100vh;

  h2 {
    margin-bottom: 16px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;
  }

  input {
    margin-left: 4px;
    flex: 1;
  }

  button {
    margin: 8px;
    padding: 4px 0;
    width: 150px;
    border: none;
    background-color: orangered;
    border-radius: 4px;
    color: #fff;

    &:hover {
      background-color: orange;
    }
  }
`;