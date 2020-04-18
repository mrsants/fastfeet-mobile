import styled from 'styled-components/native';

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

export const Card = styled.View`
  background: #fff;
  margin: 0 20px;
  margin-bottom: 10px;
  padding: 15px 30px 0 15px;
  border-radius: 4px;
  border: 1px solid #eee;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7D40E7;
  margin-left: 10px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999;
  margin-bottom: 5px;
`;

export const Value = styled.Text`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`;
