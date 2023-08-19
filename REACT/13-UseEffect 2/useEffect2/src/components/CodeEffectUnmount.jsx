import { useState } from "react";
import { MessageComponent } from "./MessageComponent";

export const CodeEffectUnmount = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {visible && <MessageComponent />}
      <button onClick={() => setVisible(!visible)}>I'm inevitable</button>
    </>
  );
};
