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

type PopupOptions = {
    layout?: 'default' | 'modal';
    width?: number;
    alignLeft?: boolean;
    hideTitle?: boolean;
    overlay?: boolean;
    emoji?: {
        text: string;
        animation: 'none' | 'wave' | 'tada' | 'heart-beat' | 'spin' | 'flash' | 'bounce' | 'rubber-band' | 'head-shake';
    };
    autoClose?: number;
    customFormUrl?: string;
    hiddenFields?: {
        [key: string]: any,
    };
    onOpen?: () => void;
    onClose?: () => void;
    onPageView?: (page: number) => void;
    onSubmit?: (payload: any) => void;
};

const formId = 'm60YPw';
const opts: PopupOptions = {
    hideTitle: true,
    layout: 'modal',
    width: 480,
    alignLeft: true,
    overlay: true,
    emoji: {
        text: '💬',
        animation: 'tada',
    },
    autoClose: 10,
    onSubmit: () => {
        alert('Thank you for submitting your application.');
    }
}

function openTallyForm() {
    (window as any).Tally.openPopup(formId, opts)
}


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
                                    openTallyForm()
                                    // window.open('https://tally.so/r/m60YPw')
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
