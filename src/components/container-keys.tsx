import { styled } from "styled-components";
import Key from "./Key";
import keysData from "../data/keys";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export default function ContainerKeys() {
  return (
    <div>
      {keysData.map((row) => (
        <Container>
          {row.map((col) => {
            if (typeof col === "string") return <Key>{col}</Key>;
            return <Key size={col.size}>{col.text}</Key>;
          })}
        </Container>
      ))}
    </div>
  );
}
