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
                        Khata Policy
                    </SectionTitle>
                    <ContentSection>
                        <Title>
                            Licily customers can enjoy interest-free purchase credit starting from ₹4500 upto ₹1,00,000 for their orders on Licily app & website.
                            <br />
                        </Title>
                        <div>
                            Policy:
                            <ul>
                                <li>
                                    Credit is enabled for every customer who register an account on Licily app/website.
                                </li>
                                <li>
                                    Customer availing credit for the first time will be needed to produce proof of identity & address to the delivery partner at the time of the delivery (once per customer). Customer can choose to not attempt KYC verification, in which case the order will be converted to cash-on-delivery.
                                </li>
                                <li>
                                    Credit billing cycle is 45 days. The billing cycle starts from the date of account creation on Licily app.
                                </li>
                                <li>
                                    The due amount must be paid on or before the due date i.e the 45th day of the cycle. Tracking of credit expenses is available on the Licily app
                                    <br />
                                    from Account {'>'} Khata.
                                </li>
                                <li>
                                    Credit limit is upgraded based on usage pattern of the customer.
                                </li>
                                <li>
                                    Late fine fee is levied on the bill amount for overdue bills as follows:
                                    <ul>
                                        <li>
                                            Bill amount (0 to 500): Fine of Rs. 100
                                        </li>
                                        <li>
                                            Bill amount (500 to 2500): Fine of Rs. 350
                                        </li>
                                        <li>
                                            Bill amount (2500 to 10,000): Fine of Rs. 2000
                                        </li>
                                        <li>
                                            Bill amount (10,000 and above): Fine of Rs. 5000
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Late fee fine is applied every 10th day from end of billing cycle due date.
                                </li>
                                <li>
                                    Fines can be paused for genuine cases like:
                                    <ul>
                                        <li>
                                            financial emergency (Licily will need to verify proof)
                                        </li>
                                        <li>
                                            disaster affected
                                        </li>
                                        <li>
                                            bank account freeze
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Licily will send notification via SMS, Email & Push notification for pending bill payment, overdue and fine.
                                </li>
                                <li>
                                    If the overdue bills has not been paid for more than 30 days from the due date, Licily reserves the right to attempt legal proceedings to recover the credit amount along with late fine fees as well as report defaulter to credit rating agencies.
                                </li>
                                <li>
                                    Credit limit is degraded on defaulting on bill payment.
                                </li>
                                <li>
                                    Customer cannot use credit if a previous credit bill is overdue.
                                </li>
                                <li>
                                    Customers can request upgrade of credit limit. Licily might need to verify additional proofs (ex: account statement, income proof).
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
