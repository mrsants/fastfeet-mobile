import { format, parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '~/components/Avatar';
import { api } from '~/services';
import { signOut } from '~/store/modules/auth/actions';
import DeliveryItem from './DeliveryItem';
import { ActionContainer, Container, List, Menu, Title, Name, Option, Options, Profile, TitleContainer, Welcome } from './styles';


export default function Deliveries() {
    const [deliveries, setDeliveries] = useState([]);
    const [typeOrder, setTypeOrder] = useState('PENDENTES');

    const dispatch = useDispatch();
    const profile = useSelector(state => state?.user?.profile);
    const auth = useSelector(state => state.auth);

    function handleLogout() {
        dispatch(signOut());
    }

    function handlePending() {
        setTypeOrder('PENDENTES');
    }

    function handleDelivered() {
        setTypeOrder('ENTREGUES');
    }

    useEffect(() => {
        async function loadDeliveries() {
            if (!auth.id) return;

            const response = await api.get(`deliverymans/${auth.id}/deliveries`);

            const data = response.data.map(delivery => ({
                ...delivery,
                start_date_formated: delivery.start_date
                    ? format(parseISO(delivery?.start_date), 'dd/MM/yyyy')
                    : '- - / - - / - -',
                end_date_formated: delivery.end_date
                    ? format(parseISO(delivery?.end_date), 'dd/MM/yyyy')
                    : '- - / - - / - -',
            }));

            if (typeOrder === 'PENDENTES') {
                const result = data.filter(deliveryItem => deliveryItem.status === 'PENDENTE')
                setDeliveries(result);
            }
            else {
                const result = data.filter(deliveryItem => deliveryItem.status === 'ENTREGUE')
                setDeliveries(result);
            }

        }
        loadDeliveries();
    }, [auth.id, typeOrder]);

    return (
        <Container>
            <Profile>
                <ActionContainer>
                    {profile?.avatar && (
                        <Avatar source={{ uri: profile?.avatar?.url }} />
                    )}
                </ActionContainer>

                <TitleContainer>
                    <Welcome>Bem vindo de volta,</Welcome>
                    <Name>{profile?.name}</Name>
                </TitleContainer>

                <ActionContainer>
                    <Icon
                        onPress={handleLogout}
                        name="exit-to-app"
                        color="#E74040"
                        size={25}
                    />
                </ActionContainer>
            </Profile>

            <Menu>
                <Title>Entregas</Title>
                <Options>
                    <Option
                        style={{
                            marginRight: 15,
                        }}
                        onPress={handlePending}
                        selected={typeOrder === 'PENDENTES'}
                    >
                        Pendentes
                    </Option>
                    <Option
                        selected={typeOrder === 'ENTREGUES'}
                        onPress={handleDelivered}
                    >
                        Entregues
                     </Option>
                </Options>
            </Menu>

            <List
                data={deliveries}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <DeliveryItem data={item} />}
            />
        </Container>
    );
}
