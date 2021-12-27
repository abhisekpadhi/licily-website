import type { NextPage } from 'next'
import Head from 'next/head'
import AppBar, {AppBarProps} from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import {logo} from '../common/icons/logo';
import {Container, Grid, Hidden, Paper} from '@mui/material';
import {heroGraphics} from '../common/icons/heroGraphics';
import {aiPick} from '../common/icons/aiPicking';
import {deliveryBikeIcon} from '../common/icons/deliveryBikeIcon';
import {shockedEmoji} from '../common/icons/shockedEmoji';
import {fbIcon, instaIcon, twitterIcon, whatsappicon} from '../common/icons/socialIcons';
import 'animate.css';
import {func} from 'prop-types';
import {useEffect, useState} from 'react';

const CustomAppBar = styled(AppBar)<AppBarProps>(({theme}) => ({
    backgroundColor: '#FFEDED',
    boxShadow: 'none',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#E63030',
    color: '#000',
}));

const TopNavContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const TopNavRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.a`
    font-family: Lora;
    font-size: 18px;
    font-weight: 600;
    margin-left: 2rem;
    color: #000;
`

const HiringBtn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 170px;
    border-radius: 100px;
    background-color: #FFD9D9;
    border: 1px solid #E63030;
    padding: 8px 14px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`

const HiringBtnRedDot = styled.div`
    width: 16px;
    height: 16px;
    background-color: #E63030;
    border-radius: 100%;
`

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
    font-size: 4.4rem;
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


const herowords = [
    "🛍 Grocery",
    "☕️ Coffee",
    "🍼 Milk",
    "🍳 Egg",
    "🥣 Cereals",
    "🍞 Bread",
    "🍗 Meat",
    "🥦 Broccoli",
    "🥭 Fruits",
    "🧀 Cheese",
    "🥐 Croissant",
    "🍪 Cookie",
    "💊 Medicine",
    "🥂 Beverage",
    "🧴 Sanitizer",
    "🧻 Tissue",
    "🧼 Soap",
    "🌿 Mint",
    "🌺 Flowers",
    "🪥 Brush",
    "🪒 Razor",
    "🧷 Safetypin",
    "😷 Mask"
]

function shuffle(array: string[]) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


function AnimatedHeroWord() {
    // after 4 seconds fadeout, 2seconds after fadeout, fadein new word
    const [word, setWord] = useState("🛍 Grocery");
    const [out, setOut] = useState(false);
    useEffect(() => {
        const setHeroWord = () => {
            setWord(shuffle(herowords)[0]);
            setOut(false);
        };
        // set first word
        setHeroWord();
        // after 4 sec. fade out current word &
        // start a 1sec timeout after which, set new word
        const outInterval = setInterval(() => {
            setOut(true);
            setTimeout(() => {
                setHeroWord();
            }, 1400);
        }, 4000);
        return () => {
            clearInterval(outInterval);
        };
    }, []);
    return (
        <HeroWord className={`animate__animated ${out ? 'animate__fadeOut' : 'animate__fadeIn'}`}>
            {word}
        </HeroWord>
    )
}

const Home: NextPage = () => {

    const getHeroWord = () => <AnimatedHeroWord />

    return (
        <Box>
            <Container>
                <ContentSection>
                    <Grid
                        container
                        spacing={4}
                    >
                        <Grid item xs display={'flex'} alignItems={'center'}>
                            <HeroSection>
                                {getHeroWord()}
                                <div>
                                    Delivered to you
                                </div>
                                <div>
                                    in <span style={{textDecoration: 'line-through'}}>hours</span> <span style={{fontWeight: 800}}>minutes</span>
                                </div>
                                <div>
                                    <AppStoreLink>
                                        <img
                                            src={'/googleplay.png'}
                                            width={180}
                                            height={63.28}
                                            alt={'licily on google play store'}
                                        />
                                    </AppStoreLink>
                                    <a>
                                        <img
                                            src={'/applestore.png'}
                                            width={180}
                                            height={63.28}
                                            alt={'licily on apple app store'}
                                        />
                                    </a>
                                </div>
                            </HeroSection>
                        </Grid>
                        <Grid item xs display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
                            {heroGraphics()}
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
                            <Grid item xs display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <div style={{paddingLeft: '2rem'}}>
                                    <Title style={{color: '#1600C8', fontWeight: 800}}>
                                        AI Assisted Packing
                                    </Title>
                                    <Description>
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        Our AI predicts your cart and packs your order before you've placed order.
                                    </Description>
                                </div>
                            </Grid>
                            <Grid item xs display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                {aiPick()}
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={4}
                            marginY={'4.4rem'}
                        >
                            <Grid item xs display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                {deliveryBikeIcon()}
                            </Grid>
                            <Grid item xs display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <div style={{paddingLeft: '2rem'}}>
                                    <Title style={{color: '#1600C8', fontWeight: 800}}>
                                        Count till 600
                                    </Title>
                                    <Description>
                                        Our delivery partner will be at your doorstep before you have finished counting
                                    </Description>
                                </div>
                            </Grid>
                        </Grid>
                    </ContentSection>

                    <Description style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: '2rem', fontWeight: 800}}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        That's it! &nbsp; {shockedEmoji()}
                    </Description>
                </Container>
            </div>

            <img
                src={'/bbsr_del.png'}
                width={'100%'}
                // height={'100%'}
                alt={'licily grocery delivery area bhubaneswar'}
                style={{marginBottom: -6}}
            />

            {/*<div style={{backgroundColor: '#FFFAED', paddingTop: '4rem', paddingBottom: '4rem',}}>
                <Container>
                    <SectionTitle style={{color: '#C38D00'}}>
                        Delivering To
                    </SectionTitle>
                    <ContentSection>
                        <Grid
                            container
                            spacing={4}
                        >
                            <Grid item xs={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <img
                                    src={'/bbsr.png'}
                                    width={240}
                                    height={240}
                                    alt={'licily grocery delivery area bhubaneswar'}
                                />
                            </Grid>
                        </Grid>
                    </ContentSection>
                </Container>
            </div>*/}

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

export default Home
