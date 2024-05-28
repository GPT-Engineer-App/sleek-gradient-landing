import { useEffect, useState, useRef } from "react";
import { Container, VStack, Link, Box } from "@chakra-ui/react";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { keyframes } from "@emotion/react";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const Index = () => {
  const [text, setText] = useState("");
  const fullText = "collective.vc ... loading ... ... reinventing ourselves";
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(fullText.substring(0, indexRef.current + 1));
      indexRef.current++;
      if (indexRef.current === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <Container centerContent maxW="600vw" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgGradient="linear(to-r, black, gray.800)" color="white" fontFamily="Roboto, sans-serif">
      <VStack spacing={8} textAlign="center">
        <Box as="pre" fontSize="2xl" whiteSpace="pre-wrap" borderRight="2px solid" animation={`${typing} 4s steps(${fullText.length}), ${blink} 0.75s step-end infinite`}>
          {text}
        </Box>
        <Link href="https://www.linkedin.com/company/collectivevc" isExternal>
          <Box as={FaLinkedin} size="48px" />
        </Link>
        <Link href="https://www.youtube.com/@collectivevc" isExternal>
          <Box as={FaYoutube} size="48px" />
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
