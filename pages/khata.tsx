import type { NextPage } from 'next'
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import {Container, Grid} from '@mui/material';
import 'animate.css';
import {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import Link from 'next/link';

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
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };


    return (
        <Box>
            <div style={{backgroundColor: '#FFEDED', paddingTop: '4rem', paddingBottom: '4rem',}}>
                <Container>
                    <SectionTitle style={{color: '#E100030'}}>
                        Khata Policy
                    </SectionTitle>
                    <ContentSection>
                        <Title>
                            Licily customers can enjoy interest-free purchase credit starting from ₹4500 upto ₹1,00,000 for their orders on Licily app & website.
                            <br />
                        </Title>
                        <div>
                            Terms & Conditions:
                            <ul>
                                <li>
                                    Credit is enabled for every customer who register an account on Licily app/website.
                                </li>
                                <li>
                                    Credit can be availed by using "Pay Later" payment option in the payment screen during checkout.
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
                                <li>
                                    Credit is unavailable when using discount.
                                </li>
                                <li>
                                    Licily reserves the right to amend, modify, cancel, update or withdraw this Program at any time without notice. Upon such premature suspension, inconvenience, cessation, withdrawal, termination or closure by the Company, no person shall be entitled to claim loss of any kind whatsoever.
                                </li>
                            </ul>

                        </div>
                    </ContentSection>


                    <Title style={{textAlign: 'center'}}>
                        Frequently Asked Questions
                    </Title>
                    <div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary

                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                                    What if customer wants to settle bill in cash?
                                </Typography>
                                {/*<Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>*/}
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes! it is possible.
                                    <br />
                                    Credit due bill can be setteled using cash-on-delivery payment.
                                    <br />
                                    From the Account {'>'} Khata screen tap on "Pay Due Bill" and in the payment options page select Cash on delivery.
                                    <br />
                                    Licily will arrange pickup of cash from customer doorstep.
                                    <br />
                                    <strong>Note: We recommend contact-less bill payment using online payment methods such as UPI</strong>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                                    Can a customer get grace period on credit due bill payment?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Unfortunately it is not possible.
                                    <br />
                                    We have kept the billing cycle as long as 45 days to ensure customer is comfortable paying bills in their own time.
                                    <br />
                                    But, we can pause late fee fines on customer request and production of verifiable proofs for criterias covered under our policy.
                                    <br />
                                    Licily reserves the right to take the final decision on the late fee fine, defaulting and credit due recovery situation.
                                    <br />
                                    Decisions are subjected to jurisdiction of Cuttack High Court, Odisha, India.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                                    Can reward points be used to settle credit due bill?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes! customer can use their reward points to settle credit due bill.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                                    Can customer use reward points and/or continue shopping even if their credit due bill is not settled?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes! customers can continue to enjoy our essentials delivery services even if they have a overdue credit bill.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                                aria-controls="panel5bh-content"
                                id="panel5bh-header"
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                                    Can offers and discount be used when availing credit?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Unfortunately it is not possible to avail discounts, offers and credit at the same time.
                                    To avail credit for order purchase, discounts and offers cannot be applied & vice versa.
                                    <br />
                                    Note: Rewards points will be available to be used along with credit.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                            <AccordionSummary
                                aria-controls="panel6bh-content"
                                id="panel6bh-header"
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                                    What about interest fees and hidden/extra charges?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We hate hidden charges as much as you do.
                                    Licily credit (Khata) will always be interest-free for all our customers.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                            <AccordionSummary
                                aria-controls="panel7bh-content"
                                id="panel7bh-header"
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                                    Who is eligible for Licily credit (Khata)?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Any customer aged greater than 18 are eligible to avail credit.
                                    <br />
                                    Eligibility is based and revised on your relationship with Licily and your spending and repayment history.
                                    <br />
                                    Licily reserves right to disqualify customers for credit subjected to violation of our policy.
                                    <br />
                                    All decisions on elgibility qualification & disqualification are subjected to jurisdiction of Cuttack High Court.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                            <AccordionSummary
                                aria-controls="panel8bh-content"
                                id="panel8bh-header"
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                                    When do I pay my bill?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    You must pay bill on or before your due date.
                                    <br />
                                    Due date is shown in Account {'>'} Khata.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                            <AccordionSummary
                                aria-controls="panel10bh-content"
                                id="panel10bh-header"
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                                    I want to increase my credit limit, what should I do?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We are happy to increase your credit limit.
                                    <br />
                                    Talk to our <Link href={'/support'}><a>customer support</a></Link> and they will guide you through the process.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel102'} onChange={handleChange('panel102')}>
                            <AccordionSummary
                                aria-controls="panel102bh-content"
                                id="panel102bh-header"
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                                    I don't see Pay Later option in the payment page, whats wrong?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Pay later is disabled when you have applied offers/coupons.
                                    <br />
                                    You will need to remove any offer or coupon to avail credit and then Pay later will be enabled in the payment screen.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                            <AccordionSummary
                                aria-controls="panel11bh-content"
                                id="panel11bh-header"
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                                    What happens when I cancel my order which was paid using credit?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The credit limit will be reversed back automatically.
                                    <br />
                                    You can track the transaction from Account {'>'} Khata screen.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                            <AccordionSummary
                                aria-controls="panel12bh-content"
                                id="panel12bh-header"
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                                    I need invoice/summary of credit transactions?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Currently we do not have this feature on Licily app.
                                    <br />
                                    But we are happy to generate one for you.
                                    <br />
                                    Get in touch with our <Link href={'/support'}><a>customer support</a></Link> and they will guide you through the process.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                            <AccordionSummary
                                aria-controls="panel13bh-content"
                                id="panel13bh-header"
                            >
                                <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                                    My online payment failed while paying credit due bill?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Sorry that you've had to face this.
                                    <br />
                                    Payment failure happen due to temporary outage on the bank's side.
                                    <br />
                                    Best solution is to just try again after sometime.
                                    <br />
                                    In case you've tried multiple time and failed,
                                    <br />
                                    Get in touch with our <Link href={'/support'}><a>customer support</a></Link> and they will help you out.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                </Container>

            </div>

        </Box>
    )
}

export default Privacy
