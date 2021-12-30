import Head from 'next/head';
import Toolbar from '@mui/material/Toolbar';
import {logo} from '../icons/logo';
import {Container, Grid, Hidden} from '@mui/material';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import AppBar, {AppBarProps} from '@mui/material/AppBar';
import {ReactNode} from 'react';
import Link from 'next/link';
import {fbIcon, instaIcon, linkedinIcon, twitterIcon, whatsappicon} from '../icons/socialIcons';

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


function LicilyTemplate(props: {component: ReactNode}) {
    return (
        <Box component="main" display={'flex'} flex={1} flexDirection={'column'} flexGrow={1} height={'100%'}>
            <Head>
                <title>Licily - Grocery Delivery</title>
                <meta name="description" content="Licily delivers grocery at your doorstep in minutes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CustomAppBar position="static">
                <Toolbar>
                    <div style={{flexGrow: 1}}>
                        <Link href={'/'}>
                            <div style={{paddingTop: 10}}>
                                <a>{logo()}</a>
                            </div>
                        </Link>
                    </div>
                    <TopNavRight>
                        <a target={'_blank'}
                           href={'https://veiled-equinox-e5e.notion.site/Licily-Jobs-b1d4d933bd4f4237b3ad72c5e83ed3a8'}
                        >
                            <HiringBtn>
                                <HiringBtnRedDot />
                                <MenuItem
                                    style={{
                                        marginLeft: 0,
                                        color: '#E63030',
                                    }}>
                                    We are hiring
                                </MenuItem>
                            </HiringBtn>
                        </a>

                        <Hidden mdDown>
                            <Link href={'/areas'}>
                                <MenuItem>
                                    Delivery Areas
                                </MenuItem>
                            </Link>
                            <Link href={'/support'}>
                                <MenuItem>
                                    Customer Support
                                </MenuItem>
                            </Link>
                        </Hidden>

                    </TopNavRight>
                </Toolbar>
            </CustomAppBar>
            <Box display={'flex'} flex={1} flexDirection={'column'} flexGrow={1}>
                {props.component}
            </Box>
            <Box display={'flex'} flex={1} flexDirection={'column'} flexGrow={1} style={{backgroundColor: '#FFEDED', paddingTop: '4rem', paddingBottom: '4rem', backgroundImage: `url("/footerbg.svg")`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <Container>
                    <SectionTitle style={{color: '#0087AD', textAlign: 'left'}}>
                        {logo()}
                    </SectionTitle>
                    <Grid
                        container
                    >
                        <Grid item md={3} xs={6}>
                            <div>
                                <Link href={'/returns'}>
                                    <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 14px 0'}}>
                                        <a style={{color: '#000'}}>Return & Refund</a>
                                    </div>
                                </Link>
                                <Link href={'/areas'}>
                                    <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 14px 0'}}>
                                        <a style={{color: '#000'}}>Delivery areas</a>
                                    </div>
                                </Link>
                                <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 14px 0'}}>
                                    <a target={'_blank'} href={'https://veiled-equinox-e5e.notion.site/Licily-Jobs-b1d4d933bd4f4237b3ad72c5e83ed3a8'} style={{color: '#000'}}>Jobs</a>
                                </div>
                                <Link href={'/support'}>
                                    <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 14px 0'}}>
                                        <a style={{color: '#000'}}>Customer support</a>
                                    </div>
                                </Link>
                                <Link href={'/terms'}>
                                    <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 14px 0'}}>
                                        <a style={{color: '#000'}}>Terms of service</a>
                                    </div>
                                </Link>
                                <Link href={'/privacy'}>
                                    <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 14px 0'}}>
                                        <a style={{color: '#000'}}>Privacy policy</a>
                                    </div>
                                </Link>

                            </div>
                        </Grid>
                        <Grid item md={3} xs={6}>
                            <div>
                                <a target={'_blank'} href={'https://www.facebook.com/licilyapp/'} style={{color: '#000'}}>
                                    <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 20px 0', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        {fbIcon()} &nbsp; Facebook
                                    </div>
                                </a>
                                <a target={'_blank'} href={'https://www.instagram.com/licilyapp/'} style={{color: '#000'}}>
                                    <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 20px 0', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        {instaIcon()} &nbsp; Instagram
                                    </div>
                                </a>
                                <a target={'_blank'} href={'https://twitter.com/licilyapp'} style={{color: '#000'}}>
                                    <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 20px 0', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        {twitterIcon()} &nbsp; Twitter
                                    </div>
                                </a>
                                <a target={'_blank'} href={'https://wa.link/zis5bl'} style={{color: '#000'}}>
                                    <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 20px 0', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        {whatsappicon()} &nbsp; WhatsApp
                                    </div>
                                </a>
                                <a target={'_blank'} href={'https://www.linkedin.com/company/licily'} style={{color: '#000'}}>
                                    <div style={{fontWeight: 800, fontSize: 18, padding: '0 0 20px 0', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        {linkedinIcon()} &nbsp; LinkedIn
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
            </Box>
        </Box>
    )
}

export default LicilyTemplate;
