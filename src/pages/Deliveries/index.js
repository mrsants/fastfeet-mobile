import { format, parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '~/components/Avatar';
import { api } from '~/services';
import { signOut } from '~/store/modules/auth/actions';
import DeliveryItem from './DeliveryItem';
import { ActionContainer, Container, List, Menu, MenuTitle, Name, Option, Options, Profile, TitleContainer, Welcome } from './styles';


export default function Deliveries() {
    const [deliveries, setDeliveries] = useState([]);
    const [typeDeliveries, setTypeDeliveries] = useState('PENDENTES');

    const dispatch = useDispatch();
    const profile = useSelector(state => state?.user?.profile);
    const auth = useSelector(state => state.auth);

    function handleLogout() {
        dispatch(signOut());
    }

    function handlePending() {
        setTypeDeliveries('PENDENTES');
    }

    function handleDelivered() {
        setTypeDeliveries('ENTREGUES');
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

            setDeliveries(data);
        }
        loadDeliveries();
    }, [auth.id, typeDeliveries]);

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
                <MenuTitle>Entregas</MenuTitle>
                <Options>
                    <Option
                        style={{
                            marginRight: 15,
                        }}
                        onPress={handlePending}
                        selected={typeDeliveries === 'PENDENTES'}
                    >
                        Pendentes
                    </Option>
                    <Option
                        selected={typeDeliveries === 'ENTREGUES'}
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
