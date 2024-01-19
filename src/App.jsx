import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const wave = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  10%, 90% {
    transform: rotate(10deg);
  }
  20%, 80% {
    transform: rotate(20deg);
  }
  30%, 70% {
    transform: rotate(30deg);
  }
  40%, 60% {
    transform: rotate(40deg);
  }
  50% {
    transform: rotate(50deg);
  }
`;

const Container = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const Text = styled.p`
  font-size: 20px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out 1s forwards;
`;

const Emoji = styled.span`
  scale: calc(2);
  padding-left: 10px;
  display: inline-block;
  animation: ${wave} 1s linear 0s infinite;
  animation-iteration-count: 3;
`;

const App = () => {
  const [showHi, setShowHi] = useState(false);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const hiTimeout = setTimeout(() => setShowHi(false), 1000);
    const nameTimeout = setTimeout(() => setShowName(false), 2000);

    return () => {
      clearTimeout(hiTimeout);
      clearTimeout(nameTimeout);
    };
  }, []);

  return (
    <Container>
      <Text style={{ animationDelay: "0s", opacity: showHi ? 1 : 0 }}>Hi!</Text>
      <Text style={{ animationDelay: "1s", opacity: showName ? 1 : 0 }}>
        My name is Mateusz{" "}
        <Emoji role="img" aria-label="wave-hand">
          👋
        </Emoji>
      </Text>
    </Container>
  );
};

export default App;
