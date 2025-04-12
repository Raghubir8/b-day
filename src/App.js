import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import dv2 from './dv2.PNG';
const App = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={true}
        numberOfPieces={150}
        gravity={0.08}
      />
      <Content>
        <Title
          as={motion.h1}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Happy Birthday, Deepshikha! 🎉
        </Title>
        <PhotoGrid>
          <PhotoWrapper
            as={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}
          >
            <Photo
              src={dv2} // Replace with Photo 1 URL
              alt="Beautiful You"
            />
          </PhotoWrapper>
        </PhotoGrid>
        <Message
          as={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          🎉 Happy Birthday to the girl who makes my heart skip a beat every single day!🤭🥳💖
        </Message>
        <Button
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert('Seriously though – thanks for being you. It’s pretty rad. Have the best day! 🥳')}
        >
        Tap for a Secret Message! 
               </Button>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  overflow-y: auto;
  padding: 20px 0;
`;

const Content = styled.div`
  text-align: center;
  max-width: 700px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PhotoGrid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const PhotoWrapper = styled.div`
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
`;

const Photo = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border: 4px solid #fff;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 150px;
    height: 225px;
  }
`;

const Message = styled.p`
  font-size: 1.4rem;
  color: #fff;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1.2rem;
  color: #fff;
  background: #ff4757;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

export default App;