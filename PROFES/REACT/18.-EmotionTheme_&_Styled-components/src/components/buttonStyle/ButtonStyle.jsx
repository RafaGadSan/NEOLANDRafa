import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useMemo } from "react";
import { getVariants } from "./utils";

const ButtonWrapper = styled.button(({ variant, theme }) => ({
  outline: "none",
  cursor: "pointer",
  margin: theme.spacing(2),
  ...variant,
  [`${theme.mediaquery.tablet}`]: {
    margin: theme.spacing(4),
  },
  [`${theme.mediaquery.desktop}`]: {
    margin: theme.spacing(6),
  },
}));

const ButtonStyle = ({ children, variant }) => {
  const theme = useTheme();
  const buttonStyles = useMemo(
    () => getVariants(theme, variant),
    [theme, variant]
  );

  return (
    <ButtonWrapper variant={buttonStyles} theme={theme}>
      {children}
    </ButtonWrapper>
  );
};

export default ButtonStyle;
