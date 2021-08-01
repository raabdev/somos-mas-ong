import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 80px;
  padding: 80px 60px;
  background: radial-gradient(
    circle,
    rgba(92, 39, 251, 1) 0%,
    rgba(112, 71, 247, 1) 100%
  );
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(${"auto-fill"}, minmax(230px, 1fr));
  grid-gap: 80px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(${"auto-fill"}, minmax(200px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 16px;
  margin-left: 20px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    color: #9AC9FB;
    transition: 200ms ease-in;
    text-decoration: underline;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 30px;
  font-weight: bold;
`;
