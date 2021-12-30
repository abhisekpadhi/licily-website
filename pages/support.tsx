import type { NextPage } from 'next'
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import {Container, Grid} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import 'animate.css';
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
`;

const Description = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
`;

const ContentSection = styled.div`
    padding-top: 3.4rem;
    padding-bottom: 3.4rem;
`;


const Support: NextPage = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    const getFaq = () => (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary

                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                        How to return product after delivery?
                    </Typography>
                    {/*<Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>*/}
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We make sure that customer acknowledges quality and quantity of items at the time of delivery.
                        For circumstances when customer was not present in-person at the time of delivery or opted for no contact delivery,
                        we are happy to arrange return of the product and issue a refund governed by our <Link href={'/returns'}><a>returns and refund policy.</a></Link>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                        What are your delivery timings?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We are an on-demand quick delivery service, we deliver orders in few minutes (7-15 minutes).
                        Our delivery services are available from 6AM - 1AM.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                        what if I don’t receive my order by the scheduled time?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        On rare occasions, due to unforeseen circumstances, your order might be delayed.
                        In case of imminent delay, our customer support executive will keep you updated about the delivery time of your order
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                        How can I cancel my order?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We profile easy and hassle-free cancellation.
                        You can cancel your order within 1 minute time window after you have placed order.
                        Post cancellation time window, you can reach our customer support to cancel your order.
                        You may be levied with a fee of Rs.29 for late cancellation (once the order is packed and/or dispatched).
                        <br />
                        Note: If you are cancelling an already dispatched COD order, COD payment option may be disabled for you on subsequent orders.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                        Can I reschedule my order?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Unfortunately we cannot reschedule order delivery since we operate on an on-demand quick delivery model.
                        You will need to cancel the order and place a new order later.
                        Order cancellation & return policy will be applied.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, fontSize: 18 }}>
                        What If I want to return something?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        You can return any items from your order hassle-free at the time of receiving the delivery & refund will be processed immediately.
                        If you need to return product post delivery, we are happy to arrange return of the product and issue a refund governed by our <Link href={'/returns'}><a>returns and refund policy.</a></Link>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );

    return (
        <Box>
            <div style={{backgroundColor: '#FFEDED', paddingTop: '4rem', paddingBottom: '4rem',}}>
                <Container>
                    <SectionTitle style={{color: '#E63030'}}>
                        Customer Support
                    </SectionTitle>
                    <ContentSection>
                        <Grid
                            container
                            spacing={4}
                        >
                            <Grid item xs display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <div style={{paddingLeft: '2rem'}}>
                                    <Title style={{color: '#E63030', fontWeight: 800}}>
                                        Phone/WhatsApp
                                    </Title>
                                    <Description>
                                        +917978608446
                                    </Description>
                                </div>
                            </Grid>
                            <Grid item xs display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <div style={{paddingLeft: '2rem'}}>
                                    <Title style={{color: '#E63030', fontWeight: 800}}>
                                        Email
                                    </Title>
                                    <Description>
                                        care@licily.com
                                    </Description>
                                </div>
                            </Grid>
                        </Grid>
                    </ContentSection>

                    <Box sx={{p: 6}}>
                        <SectionTitle style={{color: '#E63030', marginBottom: '2rem'}}>
                            Frequently Asked Questions
                        </SectionTitle>
                        {getFaq()}
                    </Box>

                    <Description style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontWeight: 800, color: '#ffa3a3'}}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        When life gives you lemons 🍋, squirt someone in the eye.
                    </Description>
                </Container>

            </div>

        </Box>
    )
}

export default Support
