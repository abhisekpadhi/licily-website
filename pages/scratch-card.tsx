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
                        Scratch card
                    </SectionTitle>
                    <ContentSection>
                        <Title>
                            Customer can earn scratch card on every successful delivery.
                            <br />
                        </Title>
                        <div>
                            Terms & Conditions:
                            <ul>
                                <li>
                                    Customer can see the list of cards in the app, tap on a card, scratch and unlock the reward.
                                </li>
                                <li>
                                    When the card is scratched the reward is randomly decided from the pool of the day.
                                </li>
                                <li>
                                    Gift item will be automatically added to cart after scratching and cannot be removed, it will be expired in 72hours from time of scratching.
                                </li>
                                <li>
                                    Gifts cannot be returned and not eligible for refund.
                                </li>
                                <li>
                                    Licily reserves the right to pull back items or reward points unlocked from scratch card in case of suspicious or fraudulent activities as detected by Licily from time to time without any notice/intimation.
                                </li>
                                <li>
                                    The reward/gift earned from scratch card is not guarateed in any manner whatsoever.
                                </li>
                                <li>
                                    If customer wins a reward points or cash, it will be credited to rewards point balance of the customer.
                                </li>
                                <li>
                                    Licily may use your personal information for promotional purposes without additional consent from or compensation to you.
                                </li>
                                <li>
                                    This offer is not available in the state of Tamil Nadu (owing to the Tamil Nadu Prize Scheme (Prohibition) Act 1979) and other states wherever prohibited by law.
                                </li>
                                <li>
                                    Customers' participation in any offer constitutes their understanding and agreement to the complete terms and conditions associated with each offer.
                                </li>
                                <li>
                                    If you are entitled for reward point, you agree to receiving the same as a gift voucher.
                                </li>
                                <li>
                                    Licily reserves the right to impose additional points limits within the overall applicable limit.
                                </li>
                                <li>
                                    Licily reserves the right to award offers and related benefits as per internal policy decided from time to time.
                                </li>
                                <li>
                                    In case of any cancellations, the reward points given on the transaction will continue to remain with customer reward points balance and non-withdrawable to your bank account. This can continue to be used on transaction on Licily app/website.
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
