import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const Background = styled.View`
  background: #7d40e7;
  height: 155px;
`;
export const Content = styled.View`
  margin-top: -60px;
  padding: 0 20px;
`;

export const Form  = styled.View``;

export const TextArea = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  border: 1px solid #eee;
  background: #fff;
  border-radius: 4px;
  height: 300px;
  font-size: 16px;
  border: 1px solid #0000001a;
  padding-left: 20px;
  padding-right: 20px;
`;


export const SubmitButton = styled(Button)`
  width: 100%;
  background: #7d40e7;
  margin-top: 20px;
`;
