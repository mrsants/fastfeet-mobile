import styled from 'styled-components/native';
import AvatarComponent from '../../components/Avatar';
import ButtonComponent from '../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  justify-content: center;
`;

export const Content = styled.View`
  align-items: center;
  padding: 0 36px;
`;

export const Avatar = styled(AvatarComponent)`
  height: 137px;
  width: 137px;
  border-radius: 68.5px;
`;

export const Details = styled.View`
  width: 100%;

  padding-top: 40px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Information = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
  margin-bottom: 15px;
`;

export const LogoutButton = styled(ButtonComponent)`
  background: #E74040;
  height: 40px;
  margin-top: 15px;
  width: 100%;
`;
