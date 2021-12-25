import type { NextPage } from 'next'
import Head from 'next/head'
import AppBar, {AppBarProps} from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import {logo} from '../common/icons/logo';
import {Container, Grid, Hidden, ImageList, Paper} from '@mui/material';
import {heroGraphics} from '../common/icons/heroGraphics';
import {aiPick} from '../common/icons/aiPicking';
import {deliveryBikeIcon} from '../common/icons/deliveryBikeIcon';
import {shockedEmoji} from '../common/icons/shockedEmoji';
import {fbIcon, instaIcon, twitterIcon, whatsappicon} from '../common/icons/socialIcons';
import Image from 'next/image';

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
    font-size: 6rem;
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



const Home: NextPage = () => {
    return (
        <Box>
            <Head>
                <title>Licily - Grocery Delivery</title>
                <meta name="description" content="Licily delivers grocery at your doorstep in minutes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CustomAppBar position="static">
                <Toolbar>
                    <div style={{flexGrow: 1}}>
                        <div style={{paddingTop: 10}}>
                            {logo()}
                        </div>
                    </div>
                    <TopNavRight>
                        <a>
                            <HiringBtn>
                                <HiringBtnRedDot />
                                <MenuItem
                                    style={{
                                        marginLeft: 0,
                                        color: '#E63030',
                                    }}>We are hiring</MenuItem>
                            </HiringBtn>
                        </a>

                        <Hidden mdDown>
                            <MenuItem>
                                Delivery Areas
                            </MenuItem>
                            <MenuItem>
                                Customer Support
                            </MenuItem>
                        </Hidden>

                    </TopNavRight>
                </Toolbar>
            </CustomAppBar>

            <Container>
                <ContentSection>
                    <Grid
                        container
                        spacing={4}
                    >
                        <Grid item xs>
                            <HeroSection>
                                <HeroWord>
                                    Grocery
                                </HeroWord>
                                <div>
                                    Delivered to you
                                </div>
                                <div>
                                    in <span style={{textDecoration: 'line-through'}}>hours</span> <span style={{fontWeight: 800}}>minutes</span>
                                </div>
                                <div>
                                    <AppStoreLink>
                                        <Image
                                            src={'/googleplay.png'}
                                            width={180}
                                            height={63.28}
                                            alt={'licily on google play store'}
                                        />
                                    </AppStoreLink>
                                    <a>
                                        <Image
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
                            <Grid item xs display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
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

            <div style={{backgroundColor: '#FFFAED', paddingTop: '4rem', paddingBottom: '4rem',}}>
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
                                <Image
                                    src={'/bbsr.png'}
                                    width={240}
                                    height={240}
                                    alt={'licily grocery delivery area bhubaneswar'}
                                />
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
                                        <Image
                                            src={'/customer.png'}
                                            width={62}
                                            height={62}
                                            alt={'licily grocery delivery area bhubaneswar'}
                                        />
                                    </div>
                                    <div style={{paddingLeft: 16}}>
                                        <div style={{fontWeight: 800, marginBottom: 8}}>Sonali Kunduri</div>
                                        <div>Licily has been a life saver  saver in emergency sitations for all my grocery needs</div>
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
                                        <Image
                                            src={'/customer.png'}
                                            width={62}
                                            height={62}
                                            alt={'licily grocery delivery area bhubaneswar'}
                                        />
                                    </div>
                                    <div style={{paddingLeft: 16}}>
                                        <div style={{fontWeight: 800, marginBottom: 8}}>Sonali Kunduri</div>
                                        <div>Licily has been a life saver  saver in emergency sitations for all my grocery needs</div>
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
                                        <Image
                                            src={'/customer.png'}
                                            width={62}
                                            height={62}
                                            alt={'licily grocery delivery area bhubaneswar'}
                                        />
                                    </div>
                                    <div style={{paddingLeft: 16}}>
                                        <div style={{fontWeight: 800, marginBottom: 8}}>Sonali Kunduri</div>
                                        <div>Licily has been a life saver  saver in emergency sitations for all my grocery needs</div>
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
                                        <Image
                                            src={'/customer.png'}
                                            width={62}
                                            height={62}
                                            alt={'licily grocery delivery area bhubaneswar'}
                                        />
                                    </div>
                                    <div style={{paddingLeft: 16}}>
                                        <div style={{fontWeight: 800, marginBottom: 8}}>Sonali Kunduri</div>
                                        <div>Licily has been a life saver  saver in emergency sitations for all my grocery needs</div>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </ContentSection>
                </Container>
            </div>

            <div style={{backgroundColor: '#FFEDED', paddingTop: '4rem', paddingBottom: '4rem', backgroundImage: `url("/footerbg.svg")`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <Container>
                    <SectionTitle style={{color: '#0087AD', textAlign: 'left'}}>
                        {logo()}
                    </SectionTitle>
                    <Grid
                        container
                    >
                        <Grid item md={3} xs={6}>
                            <div>
                                <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 14px 0'}}>
                                    <a style={{color: '#000'}}>Delivery areas</a>
                                </div>
                                <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 14px 0'}}>
                                    <a style={{color: '#000'}}>Jobs</a>
                                </div>
                                <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 14px 0'}}>
                                    <a style={{color: '#000'}}>Customer support</a>
                                </div>
                                <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 14px 0'}}>
                                    <a style={{color: '#000'}}>Terms of service</a>
                                </div>
                                <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 14px 0'}}>
                                    <a style={{color: '#000'}}>Privacy policy</a>
                                </div>

                            </div>
                        </Grid>
                        <Grid item md={3} xs={6}>
                            <div>
                                <a style={{color: '#000', padding: '10px 0'}}>
                                    <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 20px 0', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        {fbIcon()} &nbsp; Facebook
                                    </div>
                                </a>
                                <a style={{color: '#000'}}>
                                    <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 20px 0', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        {instaIcon()} &nbsp; Instagram
                                    </div>
                                </a>
                                <a style={{color: '#000'}}>
                                    <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 20px 0', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        {twitterIcon()} &nbsp; Twitter
                                    </div>
                                </a>
                                <a style={{color: '#000'}}>
                                    <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 20px 0', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        {whatsappicon()} &nbsp; WhatsApp
                                    </div>
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        marginTop={'2rem'}
                    >
                        <Grid item md={6} xs={12}>
                            <div style={{color: '#E63030', fontWeight: 800, fontSize: '1.2rem', marginBottom: '1.4rem'}}>
                                &copy; 2021 SUBNUB TECHNOLOGIES PVT LTD
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <div style={{color: '#E63030', fontWeight: 800, fontSize: '1.2rem', textAlign: 'right'}}>
                                Made with ❤️ in 🇮🇳
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Box>
    )
}

export default Home
