import type { NextPage } from 'next'
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import {Button, Container, Grid, Paper} from '@mui/material';
import {heroGraphics} from '../common/icons/heroGraphics';
import {aiPick} from '../common/icons/aiPicking';
import {deliveryBikeIcon} from '../common/icons/deliveryBikeIcon';
import {shockedEmoji} from '../common/icons/shockedEmoji';
import 'animate.css';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {openTallyForm} from '../common/lib/tally-utils';
import Script from 'next/script';
import * as React from 'react';



const ContentSection = styled.div`
    padding-top: 3.4rem;
    padding-bottom: 3.4rem;
`

const HeroWord = styled.div`
    color: #E63030;
    font-family: Lora;
    font-weight: 800;
    font-size: 5.4rem;
`;

const HeroSection = styled.div`
    font-size: 3rem;
    padding: 4rem 0;
`;

const AppStoreLink = styled.a`
    margin-right: 2rem;
`

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

const Partner: NextPage = () => {
    return (
        <Box>
            <Script
                async
                src="https://tally.so/widgets/embed.js"
            />
            <Container>
                <ContentSection>
                    <Grid
                        container
                        spacing={4}
                    >
                        <Grid item xs={12} md={6} display={'flex'} alignItems={'center'}>
                            <HeroSection>
                                <HeroWord>
                                    Licily Partner
                                </HeroWord>
                                <Box>
                                    Own <strong style={{color: '#e63030'}}>grocery</strong> business
                                </Box>
                                <div>
                                    At <strong>zero</strong> investment
                                </div>
                                <div>
                                    Earn upto <strong style={{color: '#e63030'}}>₹10 Lakhs/yr</strong>
                                </div>
                                <div>
                                    <Button
                                        onClick={() => {
                                            openTallyForm('3y8R8m');
                                        }}
                                        variant={'contained'}
                                        fullWidth
                                        style={{
                                            backgroundColor: '#e63030',
                                            padding: '14px 0',
                                            fontFamily: 'Nunito',
                                            fontWeight: 800,
                                            fontSize: '1.4rem',
                                            marginTop: 20,
                                        }}
                                    >
                                        Get started
                                    </Button>
                                </div>
                            </HeroSection>
                        </Grid>
                        <Grid item xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
                            <img
                                src={'/img/partner/hero.png'}
                                width={'100%'}
                                alt={'licily partner'}
                            />
                        </Grid>
                    </Grid>
                </ContentSection>
            </Container>


            <div style={{backgroundColor: '#EFEDFF', paddingTop: '4rem', paddingBottom: '4rem',}}>
                <Container>
                    <SectionTitle style={{color: '#1600C8'}}>
                        How Does This Work ?
                    </SectionTitle>
                    <ContentSection>
                        <Grid
                            container
                            spacing={4}
                        >
                            <Grid item xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <div style={{paddingLeft: '2rem'}}>
                                    <Title style={{color: '#1600C8', fontWeight: 800}}>
                                        Become a Licily partner

                                    </Title>
                                    <Description>
                                        <ul>
                                            <li>
                                                Start your <strong style={{color: '#1600C8'}}>virtual grocery store</strong>
                                            </li>
                                            <li>
                                                <strong style={{color: '#1600C8'}}>3000+</strong> daily need products
                                            </li>
                                            <li>
                                                Work from <strong style={{color: '#1600C8'}}>home</strong>
                                            </li>
                                            <li>
                                                <strong style={{color: '#1600C8'}}>3-4 hours</strong> daily
                                            </li>
                                            <li>
                                                Minimum <strong style={{color: '#1600C8'}}>Income Guaranteed</strong><sup>*</sup>
                                            </li>
                                        </ul>
                                    </Description>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <img
                                    src={'/img/partner/1.png'}
                                    width={'100%'}
                                    alt={'licily partner app'}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={4}
                            marginY={'4.4rem'}
                        >
                            <Grid item  xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <img
                                    src={'/img/partner/reward.png'}
                                    width={'100%'}
                                    alt={'licily partner rewards'}
                                />
                            </Grid>
                            <Grid item  xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <div style={{paddingLeft: '2rem'}}>
                                    <Title style={{color: '#1600C8', fontWeight: 800}}>
                                        3-12% commission on sale value
                                    </Title>
                                    <Description>
                                        <ul>
                                            <li>
                                                Earn <strong style={{color: '#1600C8'}}>every week</strong>
                                            </li>
                                            <li>
                                                Upto <strong style={{color: '#1600C8'}}>₹10,000 bonus</strong> every month*
                                            </li>
                                            <li>
                                                High performing Licily partner get rewards like - <strong style={{color: '#1600C8'}}>Bike, Car, Holiday trips</strong>
                                            </li>
                                        </ul>
                                    </Description>
                                </div>
                            </Grid>
                        </Grid>
                    </ContentSection>

                    <Description style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: '2rem', fontWeight: 800}}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        That's it! &nbsp; {shockedEmoji()}
                    </Description>
                    <Box paddingTop={2} textAlign={'center'}>
                        * conditions apply
                    </Box>
                </Container>
            </div>

            <div style={{backgroundColor: '#edffef', paddingTop: '4rem', paddingBottom: '4rem',}}>
                <Container>
                    <ContentSection>
                        <Grid
                            container
                            spacing={4}
                        >
                            <Grid item xs={12} md={6}>
                                <Title style={{color: '#366201', fontWeight: 800}}>
                                    Be your own boss 😎 <br />
                                    Start earning 💰 from first week <br />
                                    <u>Zero</u> investment & <u>Zero</u> loss 😍
                                </Title>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Button
                                    onClick={() => {
                                        openTallyForm('3y8R8m');
                                    }}
                                    variant={'contained'}
                                    fullWidth
                                    style={{
                                        backgroundColor: '#366201',
                                        padding: '14px 0',
                                        fontFamily: 'Nunito',
                                        fontWeight: 800,
                                        fontSize: '1.4rem',
                                        marginTop: 20,
                                    }}
                                >
                                    Apply Now
                                </Button>
                            </Grid>
                        </Grid>
                    </ContentSection>
                </Container>
            </div>

            <div style={{backgroundColor: '#EDFBFF', paddingTop: '4rem', paddingBottom: '4rem',}}>
                <Container>
                    <SectionTitle style={{color: '#0087AD'}}>
                        Customer ❤️ Us
                    </SectionTitle>
                    <ContentSection>
                        <Grid
                            container
                            spacing={4}
                        >
                            <Grid item xs={12} md={6}>
                                <Paper
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        padding: 20,
                                        borderRadius: 20,
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                        marginBottom: 28,
                                    }}
                                >
                                    <div>
                                        <img
                                            src={'/customer.png'}
                                            width={62}
                                            height={62}
                                            alt={'licily grocery delivery area bhubaneswar'}
                                        />
                                    </div>
                                    <div style={{paddingLeft: 16}}>
                                        <div style={{fontWeight: 800, marginBottom: 8}}>Sonali K</div>
                                        <div>Licily has been a life saver  saver in emergency situations for all my grocery needs</div>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Paper
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        padding: 20,
                                        borderRadius: 20,
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                        marginBottom: 28,
                                    }}
                                >
                                    <div>
                                        <img
                                            src={'/p2.jpg'}
                                            width={62}
                                            height={62}
                                            alt={'licily grocery delivery area bhubaneswar'}
                                            style={{borderRadius: 100}}
                                        />
                                    </div>
                                    <div style={{paddingLeft: 16}}>
                                        <div style={{fontWeight: 800, marginBottom: 8}}>Rahul Chakraborty</div>
                                        <div>Unbelievable speed, cannot believe these guys delivered my groceries so fast</div>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={4}
                        >
                            <Grid item xs={12} md={6}>
                                <Paper
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        padding: 20,
                                        borderRadius: 20,
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                        marginBottom: 28,
                                    }}
                                >
                                    <div>
                                        <img
                                            src={'/p3.jpg'}
                                            width={62}
                                            height={62}
                                            alt={'licily grocery delivery area bhubaneswar'}
                                            style={{borderRadius: 100}}
                                        />
                                    </div>
                                    <div style={{paddingLeft: 16}}>
                                        <div style={{fontWeight: 800, marginBottom: 8}}>Abijit Pattnaik</div>
                                        <div>Returns process was so smooth with Licily, I'm very happy with their services</div>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Paper
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        padding: 20,
                                        borderRadius: 20,
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                        marginBottom: 28,
                                    }}
                                >
                                    <div>
                                        <img
                                            src={'/04.jpg'}
                                            width={62}
                                            height={62}
                                            alt={'licily grocery delivery area bhubaneswar'}
                                            style={{borderRadius: 100}}
                                        />
                                    </div>
                                    <div style={{paddingLeft: 16}}>
                                        <div style={{fontWeight: 800, marginBottom: 8}}>Pritam Krishna</div>
                                        <div>Could not find a coupon but found all the grocery items I need and the fast delivery amazes me</div>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </ContentSection>
                </Container>
            </div>


        </Box>
    )
}

export default Partner
