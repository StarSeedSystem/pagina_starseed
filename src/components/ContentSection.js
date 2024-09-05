import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionWrapper = styled(motion.section)`
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  margin: 2rem 0;
  border-radius: 30px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 0 0 10px ${props => props.theme.colors.primary};
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ContentCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
  }
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1rem;
`;

export const CardContent = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textLight};
  text-align: center;
`;