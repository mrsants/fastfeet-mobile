import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Background, Card, Container, Content, Label, Title, TitleContainer, Value } from './styles';
import { api } from '~/services';

export default function ShowProblem() {
    // const route = useRoute();
    // const { delivery_id } = route;
    // const [problems, setProblems] = useState([]);

    // useEffect(()=> {
    //     async function loadProblem() {
    //         const response = await api.get('')
    //     }

    //     loadProblem();
    // })
    return (
        <Container>
            <Background />
            <Content>
                <Card>
                    <TitleContainer>
                        <Icon name="local-shipping" color="#7D40E7" size={20} />
                        <Title>Informações da entrega</Title>
                    </TitleContainer>
                    <Label>DESTINATÁRIO</Label>
                    <Value>{delivery.recipients.name}</Value>
                    <Label>ENDEREÇO DE ENTREGA</Label>
                    <Value>
                        {delivery.recipients.street}, {delivery.recipients.number},{' '}
                        {delivery.recipients.city} - {delivery.recipients.state},{' '}
                        {delivery.recipients.zip_code}
                    </Value>
                    <Label>PRODUTO</Label>
                    <Value>{delivery.product}</Value>
                </Card>
            </Content>
        </Container>
    );
}
