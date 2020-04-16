import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BarProgress from '../BarProgress';
import { Container, Detail, Details, TextDetail, TextLink, Title, TitleContainer, TitleDetail } from './styles';

export default function DeliveryItem({ data }) {
  const navigation = useNavigation();

  return (
    <Container>
      <TitleContainer>
        <Icon name="local-shipping" color="#7D40E7" size={20} />
        <Title>Encomenda 0{data.id}</Title>
      </TitleContainer>

      <BarProgress status={data.status} />

      <Details>
        <Detail>
          <TitleDetail>Data</TitleDetail>
          <TextDetail>{data.start_date_formated}</TextDetail>
        </Detail>
        <Detail>
          <TitleDetail>Cidade</TitleDetail>
          <TextDetail>{data.recipients.city}</TextDetail>
        </Detail>
        <Detail>
          <TextLink
            onPress={() => navigation.navigate('Detalhes', { delivery: data })}
          >
            Ver detalhes
          </TextLink>
        </Detail>
      </Details>
    </Container>
  );
}

DeliveryItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    start_date_formated: PropTypes.string.isRequired,
    recipient: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
