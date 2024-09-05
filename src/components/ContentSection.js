import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionWrapper = styled(motion.section)`
  padding: 2.5rem 1rem;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(10px);
  margin: 1.5rem 0;
  border-radius: 25px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 2rem 0.8rem;
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 4rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 0 0 10px ${props => props.theme.colors.primary};
  padding: 0 1rem;
  word-wrap: break-word;
  hyphens: auto;
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
  }
`;

export const ContentGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const ContentCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.075);
  padding: 2rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  flex: 1 1 300px;
  max-width: 400px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    flex: 1 1 250px;
    max-width: 350px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 2.8rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1.2rem;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
`;

export const CardContent = styled.p`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;