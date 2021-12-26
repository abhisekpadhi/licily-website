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
`;

const Description = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
`;

const ContentSection = styled.div`
    padding-top: 3.4rem;
    padding-bottom: 3.4rem;
`;


const Areas: NextPage = () => {
    return (
        <Box>
            <div style={{backgroundColor: '#FFEDED', paddingTop: '4rem', paddingBottom: '4rem',}}>
                <Container>
                    <SectionTitle style={{color: '#E63030'}}>
                        Delivery Neighbourhoods
                    </SectionTitle>
                    <ContentSection>
                        <Grid
                            container
                            spacing={4}
                        >
                            <Grid item xs display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <div style={{paddingLeft: '2rem'}}>
                                    <Title style={{color: '#E63030', fontWeight: 800}}>
                                        Bhubaneswar
                                    </Title>
                                    <Description>
                                        Z1 Estate
                                    </Description>
                                </div>
                            </Grid>
                            {/*<Grid item xs display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <div style={{paddingLeft: '2rem'}}>
                                    <Title style={{color: '#E63030', fontWeight: 800}}>
                                        Email
                                    </Title>
                                    <Description>
                                        care@licily.com
                                    </Description>
                                </div>
                            </Grid>*/}
                        </Grid>
                    </ContentSection>
                </Container>

            </div>

        </Box>
    )
}

export default Areas
