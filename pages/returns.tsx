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
                        Return & Refund Policy
                    </SectionTitle>
                    <ContentSection>
                        <Title>
                            We have a no questions asked return policy.
                            <br />
                        </Title>
                        <div>
                            Returns are eligible for refund if they are covered under following criteria.
                            <br />
                            At the time of delivery:
                            <br />
                            <ol>
                                <li>
                                    We accept partial and full return of ordered items. Required refund is processed immediately back to customer chosen mode of payment and in case of online payment modes the credited amount will be reflected in 5-7 business days.
                                </li>
                                <li>
                                    Full return of an “already dispatched” or “arrived” COD order may lead to disabling of COD mode of payment for subsequent orders. COD will be re-enabled eventually after 4 subsequent successful deliveries.
                                </li>
                            </ol>

                            <br />
                            After delivery:
                            <br />
                            We accept partial and full return of ordered items after delivery on the following scenarios:
                            <ol>
                                <li>
                                    Product is expired
                                </li>
                                <li>
                                    Product is defective: broken, leaking, expired
                                </li>
                                <li>
                                    Time limits:
                                    <ul>
                                        <li>
                                            Perishable goods: Within 12 hours from the delivery time
                                        </li>
                                        <li>
                                            Other goods : Within 24 hours from the delivery time
                                        </li>
                                    </ul>
                                </li>

                            </ol>
                        </div>
                    </ContentSection>
                </Container>

            </div>

        </Box>
    )
}

export default Privacy
