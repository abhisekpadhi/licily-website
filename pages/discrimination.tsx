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
    margin-top: 3rem;
    margin-bottom: 1rem;
`;

const Description = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    padding-top: 2rem;
`;

const ContentSection = styled.div`
    padding-bottom: 3.4rem;
`;


const Privacy: NextPage = () => {
    return (
        <Box>
            <div style={{backgroundColor: '#FFEDED', paddingTop: '4rem', paddingBottom: '4rem',}}>
                <Container>
                    <SectionTitle style={{color: '#E63030'}}>
                        Anti Discrimination
                    </SectionTitle>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <img
                            src={'/antiDiscrimination.svg'}
                            alt={'Licily anti discrimination policy'}
                            width={120}
                            height={120}
                        />
                    </Box>
                    <Description>
                        You will not discriminate against any merchants, buyers, or pickup & delivery partners  based on race, religion, caste, national origin, disability, sexual orientation, sex, marital status, gender identity, age or any other metric which is deemed to be unlawful under applicable laws.
                    </Description>
                    <Description>
                        Any credible proof of such discrimination, including any refusal to provide or receive goods or services based on the above metrics, whether lawful or unlawful, shall render you liable to lose access to the platform immediately.
                    </Description>
                    <Description>
                        You will not have any claim towards, and we will not have any liability towards any termination which is undertaken as a result of the aforementioned event.
                    </Description>
                </Container>

            </div>

        </Box>
    )
}

export default Privacy
