import styled from "@emotion/styled";

const H1Custom = styled.h1`
  background-color: blue;
  text-align: center;
  width: ${({ widthVariant }) =>
    widthVariant == "largo"
      ? "500px"
      : "medio"
      ? "300px"
      : "pequeño" && "100px"};
`;

export const H1C = ({ text, width }) => {
  return <H1Custom widthVariant={width}>{text}</H1Custom>;
};
