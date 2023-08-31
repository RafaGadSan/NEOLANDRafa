import styled from "@emotion/styled";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: ${({ flexDir }) => flexDir};
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
`;

const FlexContainer = ({ children, flexDir, gap, width }) => {
  return (
    <ContainerStyled flexDir={flexDir} gap={gap} width={width}>
      {children}
    </ContainerStyled>
  );
};

export default FlexContainer;
