import type { NextPage } from 'next'
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import {Button, Container} from '@mui/material';
import 'animate.css';
import Script from 'next/script';

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


const Areas: NextPage = () => {
    return (
        <Box>
            <Script src={'https://tally.so/widgets/embed.js'} />
            <div style={{backgroundColor: '#FFEDED', paddingTop: '4rem', paddingBottom: '4rem',}}>
                <Container>
                    <SectionTitle style={{color: '#E63030'}}>
                        Live project
                    </SectionTitle>
                    <ContentSection>
                        <Title>
                            About Licily
                        </Title>
                        <Description>
                            Licily is a technology startup founded by ex-swiggy, udaan, reliance-retail staffs solving hard problems in last mile grocery & other essentials delivery in Bharat 🇮🇳.
                        </Description>
                        <Title>
                            Why are we doing this?
                        </Title>
                        <Description>
                            The world is moving towards a phase where consumers will prioritize reliability & delightful delivery experience over discounts and compromises.
                        </Description>

                        <Title>
                            About the training program
                        </Title>
                        <Description>
                            The purpose of the training program is to involve young minds with problem solving & generate fresh ideas to build out of the box solutions that can help them to get a front row seat look at how quick-commerce & hyperlocal delivery is getting built in Bharat 🇮🇳.
                        </Description>


                        <Title>
                            What can interns takeaway from this program
                        </Title>
                        <Description>
                            <ol>
                                <li>
                                    Daily interaction with industry experts (You'll learn as you do it)
                                </li>
                                <li>
                                    Monthly stipend
                                </li>
                                <li>
                                    Rewards on best performance
                                </li>
                                <li>
                                    Certificate and letter of recommendation on completion of the training program
                                </li>
                                <li>
                                    Fully remote
                                </li>
                            </ol>
                        </Description>

                        <strong>Duration:</strong> 2 Months (Feb 2022 - March 2022)
                        <br />
                        <strong>Location:</strong> Remote + On-site

                        <Title>
                            Please fill the form before 10th January, 2022, 11:59pm.
                        </Title>

                        <div>
                            <Button
                                onClick={() => window.open('https://tally.so/r/w4zgYm')}
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
