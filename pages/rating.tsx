import type { NextPage } from 'next'
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import {Container, Grid} from '@mui/material';
import 'animate.css';

const SectionTitle = styled.div`
    font-size: 3.4rem;
    font-family: Lora;
    font-weight: 800;
    text-align: center;
`;

const Title = styled.div`
    font-size: 2rem;
    font-weight: 600;
    margin-top: 3rem;
    margin-bottom: 1rem;
`;

const Description = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    padding-top: 2rem;
`;

const ContentSection = styled.div`
    padding-bottom: 3.4rem;
`;


const Privacy: NextPage = () => {
    return (
        <Box>
            <div style={{backgroundColor: '#FFEDED', paddingTop: '4rem', paddingBottom: '4rem',}}>
                <Container>
                    <SectionTitle style={{color: '#E63030'}}>
                        Rating
                    </SectionTitle>
                    <Description>
                        Ratings allow us to ensure a great delivery experience for both customers and delivery partners and Licily. Just like you rate delivery partner service, they can rate you on a scale of 1-5 stars after each delivery.
                    </Description>
                    <ContentSection>
                        <Title>
                            How your rating is calculated
                        </Title>
                        <div>
                            Your rating is an average of the ratings you’ve received from our delivery partners.
                            <br />
                            It is completely anonymous to our delivery partners.
                            <br />
                            Very few people have perfect rating of 5.0, so don’t worry too much. Things that seem small to you can matter to your delivery partner.
                            <br />
                            <strong>Short wait times</strong>
                            <br />
                            Delivery partners love when customer are ready to receive products on time and not keep them waiting.
                            <br />
                            <strong>Courtesy</strong>
                            <br />
                            Simple but true - it’s important our customers treat our delivery partners the way they’d expect to be treated themselves. A positive attitude and considerate mindset towards the delivery partner can go a long way.
                            <br />

                        </div>
                        <Title>
                            Why your rating matters
                        </Title>
                        <div>
                            Ratings fosters mutual respect between delivery partners and customers. This strengthens our community and helps everyone get ht most from Licily. A high rating is about moret than bragging rights among your friends; it’s a sign that people enjoyed their time with you. Keep up the good work!
                        </div>
                    </ContentSection>
                </Container>

            </div>

        </Box>
    )
}

export default Privacy
