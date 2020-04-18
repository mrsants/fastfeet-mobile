import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Background, Card, Container, Content, Description, Date, Title } from './styles';
import { api } from '~/services';
import { format, parseISO } from 'date-fns';


export default function ShowProblem() {
    const routes = useRoute();
    const { delivery_id } = routes.params;
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        async function loadProblem() {
            const response = await api.get(`deliverymans/problems/${delivery_id}`);

            const data = response.data.map(problem => {
                return {
                    id: problem?.id,
                    description: problem?.description,
                    date: format(parseISO(problem?.created_at), 'dd/MM/yyyy')
                }
            });

            setProblems(data);
        }

        loadProblem();
    }, []);

    return (
        <Container>
            <Background />
            <Content>
                <Title>Encomenda {problems?.id}</Title>
                {problems.map(item => {
                    return (<Card key={item.id}>
                        <Description>{item?.description}</Description>
                        <Date>{item.date}</Date>
                    </Card>)
                })}
            </Content>
        </Container>
    );
}
