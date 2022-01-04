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
                        Referral
                    </SectionTitle>
                    <ContentSection>
                        <Title>
                            Customers can refer their friends and earn reward points on successfully referring a new customer.
                            <br />
                        </Title>
                        <div>
                            <strong>Note:</strong> A referral is considered successful when the referred customer gets their first order successfully delivered.
                        </div>
                        <div>
                            Terms & Conditions:
                            <ul>
                                <li>
                                    For every successful referral, Licily will add 50 reward points to refree customer account.
                                </li>
                                <li>
                                    There is no limit on how many friends a Licily user can refer.
                                </li>
                                <li>
                                    Customer will be eligible for reward points when following conditions are met:
                                    <ol>
                                        <li>
                                            Referred friend has signed up, placed order with Licily and the delivery was successful.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    If your friend is referred by multiple Licily users, the reward points will be processed to the Licily user whose referral code was used by the referred user.
                                </li>
                                <li>
                                    Any fraud or abuse concerning the program is subject to strict administrative and / or legal action by us, including but not limited to reversal of referral reward and/or termination of participation. A fraud encompasses:
                                    <ol>
                                        <li>
                                            If a user is found referring himself using multiple IDs or phone numbers.
                                        </li>
                                        <li>
                                            If a user is found making multiple successful referrals and redeeming his/her referral rewards and then a majority of his/her Referees return/cancel their orders.
                                        </li>
                                        <li>
                                            Any other attempt to take unfair advantage, as deemed by us, of the Referral Program.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    Licily reserves the right to amend, modify, cancel, update or withdraw this Program at any time without notice. Upon such premature suspension, inconvenience, cessation, withdrawal, termination or closure by the Company, no person shall be entitled to claim loss of any kind whatsoever.
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
