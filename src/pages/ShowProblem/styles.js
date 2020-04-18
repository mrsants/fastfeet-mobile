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
`;

export const Card = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: #fff;
  margin: 0 20px;
  margin-bottom: 10px;
  padding: 15px 30px 15px 15px;
  border-radius: 4px;
  border: 1px solid #eee;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 12.5;
`;


export const Description = styled.Text`
  color: #999999;
  font-size: 16px;
`;

export const Date = styled.Text`
  color: #C1C1C1;
  font-size: 12px;
`;
