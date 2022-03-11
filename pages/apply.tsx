import type { NextPage } from 'next'
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import {Button, Container} from '@mui/material';
import 'animate.css';
import Script from 'next/script';
import {openTallyForm} from '../common/lib/tally-utils';

const SectionTitle = styled.div`
    font-size: 3.4rem;
    font-family: Lora;
    font-weight: 800;
    text-align: center;
`;

const Title = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    margin-top: 1.2rem;
`;

const Description = styled.div`
    font-size: 1rem;
`;

const ContentSection = styled.div`
    padding-top: 3.4rem;
    padding-bottom: 3.4rem;
`;

const tallyFormId = 'm60YPw';

const Areas: NextPage = () => {
    return (
        <Box>
            <Script
                async
                src="https://tally.so/widgets/embed.js"
            />
            <div style={{backgroundColor: '#FFEDED', paddingTop: '4rem', paddingBottom: '4rem',}}>
                <Container>
                    <SectionTitle style={{color: '#E63030'}}>
                        Apply for Job
                    </SectionTitle>
                    <ContentSection>
                        <Title>
                            About Licily
                        </Title>
                        <Description>
                            Licily is a technology startup founded by ex-swiggy, udaan, reliance-retail staffs solving hard problems in last mile grocery delivery & other essentials delivery in Bharat 🇮🇳.
                        </Description>
                        <Title>
                            Why are we doing this?
                        </Title>
                        <Description>
                            The world is moving towards a phase where consumers will prioritize reliability & delightful delivery experience over discounts and compromises.
                        </Description>
                        <div>
                            <Button
                                onClick={() => {
                                    openTallyForm(tallyFormId)
                                }}
                                variant={'contained'}
                                color={'secondary'}
                                fullWidth
                                style={{
                                    padding: '14px 0',
                                    fontFamily: 'Nunito',
                                    fontWeight: 800,
                                    fontSize: '1.4rem',
                                    marginTop: 20,
                                }}
                            >
                                Apply Now
                            </Button>
                        </div>
                    </ContentSection>
                </Container>

            </div>

        </Box>
    )
}

export default Areas
