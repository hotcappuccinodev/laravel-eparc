import Nav from '../components/core/navBar'
import Footer from '../components/core/footer'
import Company from './company'
import {Button, Container, createIcon, Flex, Heading, Stack, Text,} from '@chakra-ui/react';

const Home = () => {
    return (
        <>
            <div className={'h-screen'}>
                <Nav/>
                <div className={'h-[calc(100vh-60px)] hero'}
                     style={{backgroundImage: "url('/images/hero.png')", backgroundSize: "cover", objectFit: "cover"}}>

                    <Container maxW={'7xl'}>
                        <Stack
                            align={'center'}
                            spacing={{base: 8, md: 10}}
                            py={{base: 20, md: 28}}
                            direction={{base: 'column', md: 'row'}}>
                            <Stack flex={1} spacing={{base: 5, md: 10}}>
                                <Heading
                                    lineHeight={1.1}
                                    fontWeight={600}
                                    fontSize={{base: '3xl', sm: '4xl', lg: '6xl'}}>
                                    <Text
                                        as={'span'}
                                        position={'relative'}
                                        _after={{
                                            content: "''",
                                            width: 'full',
                                            height: '30%',
                                            position: 'absolute',
                                            bottom: 1,
                                            left: 0,
                                            bg: 'red.400',
                                            zIndex: -1,
                                        }}>
                                        Umai Car,
                                    </Text>
                                    <br/>
                                    <Text as={'span'} color={'red.400'}>
                                        Zoufriya everywhere!
                                    </Text>
                                </Heading>
                                <Text color={'gray.900'}>
                                    Snippy is a rich coding snippets app that lets you create your own
                                    code snippets, categorize them, and even sync them in the cloud so
                                    you can use them anywhere. All that is free!
                                </Text>
                                <Stack
                                    spacing={{base: 4, sm: 6}}
                                    direction={{base: 'column', sm: 'row'}}>
                                    <Button
                                        rounded={'full'}
                                        size={'lg'}
                                        fontWeight={'normal'}
                                        px={6}
                                        colorScheme={'red'}
                                        bg={'red.400'}
                                        _hover={{bg: 'red.500'}}>
                                        Get started
                                    </Button>
                                    <Button
                                        rounded={'full'}
                                        size={'lg'}
                                        fontWeight={'normal'}
                                        px={6}
                                        leftIcon={<PlayIcon h={4} w={4} color={'gray.300'}/>}>
                                        How It Works
                                    </Button>
                                </Stack>
                            </Stack>
                            <Flex
                                flex={1}
                                justify={'center'}
                                align={'center'}
                                position={'relative'}
                                w={'full'}>
                            </Flex>
                        </Stack>
                    </Container>
                </div>
            </div>
            <Company/>
            <Footer/>
        </>
    )
}

export default Home

const PlayIcon = createIcon({
    displayName: 'PlayIcon',
    viewBox: '0 0 58 58',
    d:
        'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});

