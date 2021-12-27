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
`;

const ContentSection = styled.div`
    padding-top: 3.4rem;
    padding-bottom: 3.4rem;
`;


const Privacy: NextPage = () => {
    return (
        <Box>
            <div style={{backgroundColor: '#FFEDED', paddingTop: '4rem', paddingBottom: '4rem',}}>
                <Container>
                    <SectionTitle style={{color: '#E63030'}}>
                        Reward Points
                    </SectionTitle>
                    <ContentSection>
                        <Title>
                            This is a loyalty program for Licily customers.
                            <br />
                        </Title>
                        <div>
                            Policy:
                            <ul>
                                <li>
                                    Customers earn upto 1% of total payable amount of every order with total amount above Rs.100 as reward points in the account when ordering essentials on Licily app & website.
                                </li>
                                <li>
                                    Reward point is credited to the customer account after successful delivery of the order.
                                </li>
                                <li>
                                    Reward points are not withdrawn or refunded for post-order returns, customers will continue to enjoy earned reward points.
                                </li>
                                <li>
                                    Reward points can be redeemed to pay for orders.
                                </li>
                                <li>
                                    Reward points are non transferrable. It is tied to customer Licily account.
                                </li>
                                <li>
                                    Reward points expire after 6 months of inactivity.
                                </li>
                                <li>
                                    Reward points can be redeemed only for transactions on Licily app & website.
                                </li>
                            </ul>

                        </div>
                    </ContentSection>
                </Container>

            </div>

        </Box>
    )
}

export default Privacy
