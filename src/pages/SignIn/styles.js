import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  background-color: #7d40e7;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const IForm = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;
