import '../../style/footerBanner.css'
import {
    Box,
    chakra,
    Container,
    IconButton,
    Input,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import {FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import {BiMailSend} from 'react-icons/bi';

const Logo = (props) => {
    return (
        <div className={'flex'}>
            <svg
                height={32}
                viewBox="0 0 120 28"
                xmlns="http://www.w3.org/2000/svg"
                {...props}>
                <path
                    d="M26.48 8.62001C25.9711 7.45637 25.2975 6.37195 24.48 5.40001C23.2714 3.92035 21.7632 2.71341 20.0546 1.85862C18.346 1.00383 16.4758 0.520582 14.567 0.440674C12.6582 0.360766 10.7541 0.68601 8.98 1.395C7.20594 2.104 5.60214 3.18067 4.27417 4.55414C2.94619 5.92762 1.92414 7.56676 1.27529 9.36369C0.626436 11.1606 0.365493 13.0746 0.509634 14.9796C0.653775 16.8847 1.19973 18.7376 2.11157 20.4164C3.02341 22.0953 4.28046 23.562 5.79998 24.72C6.77498 25.4779 7.85233 26.094 8.99998 26.55C10.609 27.2094 12.3311 27.549 14.07 27.55C17.6594 27.5421 21.0992 26.1113 23.6354 23.5713C26.1717 21.0314 27.5973 17.5894 27.6 14C27.6026 12.1485 27.2213 10.3166 26.48 8.62001V8.62001ZM14.06 3.19001C15.6215 3.18984 17.1642 3.53115 18.58 4.19001V4.19001C18.2347 4.33918 17.8718 4.44337 17.5 4.50001C16.2766 4.67711 15.1432 5.24509 14.2691 6.11918C13.3951 6.99328 12.8271 8.12661 12.65 9.35001C12.5722 10.0361 12.2602 10.6744 11.7665 11.1572C11.2728 11.64 10.6277 11.9377 9.93998 12C8.71657 12.1771 7.58324 12.7451 6.70915 13.6192C5.83505 14.4933 5.26707 15.6266 5.08998 16.85C5.03002 17.5024 4.75167 18.1155 4.29998 18.59V18.59C3.52063 16.9433 3.17053 15.1261 3.28225 13.3077C3.39397 11.4893 3.96388 9.72871 4.93895 8.18976C5.91401 6.65081 7.26255 5.38353 8.85905 4.50586C10.4555 3.62819 12.2481 3.16865 14.07 3.17001L14.06 3.19001ZM5.78998 21C5.90998 20.89 6.02998 20.79 6.14998 20.67C7.03963 19.8075 7.61069 18.6689 7.76998 17.44C7.83456 16.7493 8.14298 16.1041 8.63998 15.62C9.11822 15.1222 9.76195 14.8163 10.45 14.76C11.6734 14.5829 12.8067 14.0149 13.6808 13.1408C14.5549 12.2667 15.1229 11.1334 15.3 9.91001C15.3432 9.18752 15.6533 8.50685 16.17 8.00001C16.66 7.51186 17.3099 7.21711 18 7.17001C19.1239 7.01537 20.1721 6.51573 21 5.74001C21.9426 6.52208 22.7413 7.46291 23.36 8.52001C23.322 8.57136 23.2784 8.61832 23.23 8.66001C22.7526 9.16221 22.1098 9.47477 21.42 9.54001C20.1953 9.71401 19.0603 10.281 18.1856 11.1557C17.311 12.0303 16.744 13.1654 16.57 14.39C16.4995 15.0784 16.1932 15.7213 15.7029 16.2098C15.2127 16.6982 14.5687 17.0021 13.88 17.07C12.653 17.2458 11.5154 17.8126 10.6363 18.6863C9.75713 19.5601 9.18328 20.6941 8.99998 21.92C8.94616 22.4087 8.77832 22.878 8.50998 23.29C7.48397 22.6808 6.56506 21.9072 5.78998 21V21ZM14.06 24.86C13.0452 24.8611 12.0354 24.7197 11.06 24.44C11.3936 23.818 11.6106 23.1402 11.7 22.44C11.7701 21.7531 12.0749 21.1114 12.5632 20.6232C13.0514 20.135 13.6931 19.8301 14.38 19.76C15.6052 19.5849 16.7408 19.0178 17.6168 18.1435C18.4929 17.2693 19.0624 16.1349 19.24 14.91C19.3101 14.2231 19.6149 13.5814 20.1032 13.0932C20.5914 12.605 21.2331 12.3001 21.92 12.23C22.842 12.1101 23.7208 11.7668 24.48 11.23C24.9015 12.8279 24.9515 14.5012 24.626 16.1214C24.3004 17.7416 23.6081 19.2657 22.6021 20.5768C21.5961 21.8879 20.3031 22.9511 18.8224 23.6849C17.3417 24.4187 15.7125 24.8036 14.06 24.81V24.86Z"
                    fill="#f56565"
                />
            </svg>
            <p>
                {'UmaiParc'}
            </p>
        </div>
    );
};

const SocialButton = ({href, label, children}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({children}) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const Footer = () => {
    return (
        <footer className="new_footer_area bg_color" style={{background: "#F7FAFC !important"}}>
            <div className="new_footer_top new_footer_toP">
                <Box
                    bg={useColorModeValue('gray.50', 'gray.900')}
                    color={useColorModeValue('gray.700', 'gray.200')}>
                    <Container maxW={'6xl'} py={10}>
                        <SimpleGrid
                            templateColumns={{sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr'}}
                            spacing={8}>
                            <Stack spacing={6}>
                                <Box>
                                    <Logo color={useColorModeValue('gray.700', 'white')}/>
                                </Box>
                                <Text fontSize={'sm'}>
                                    © 2022 Umai ou. All rights reserved
                                </Text>
                                <Stack direction={'row'} spacing={6}>
                                    <SocialButton label={'Twitter'} href={'#'}>
                                        <FaTwitter/>
                                    </SocialButton>
                                    <SocialButton label={'YouTube'} href={'#'}>
                                        <FaYoutube/>
                                    </SocialButton>
                                    <SocialButton label={'Instagram'} href={'#'}>
                                        <FaInstagram/>
                                    </SocialButton>
                                </Stack>
                            </Stack>
                            <Stack align={'flex-start'}>
                                <ListHeader>Company</ListHeader>
                                <Link href={'#'}>About us</Link>
                                <Link href={'#'}>Blog</Link>
                                <Link href={'#'}>Contact us</Link>
                                <Link href={'#'}>Pricing</Link>
                                <Link href={'#'}>Testimonials</Link>
                            </Stack>
                            <Stack align={'flex-start'}>
                                <ListHeader>Support</ListHeader>
                                <Link href={'#'}>Help Center</Link>
                                <Link href={'#'}>Terms of Service</Link>
                                <Link href={'#'}>Legal</Link>
                                <Link href={'#'}>Privacy Policy</Link>
                                <Link href={'#'}>Satus</Link>
                            </Stack>
                            <Stack align={'flex-start'}>
                                <ListHeader>Stay up to date</ListHeader>
                                <Stack direction={'row'}>
                                    <Input
                                        placeholder={'Your email address'}
                                        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                        border={0}
                                        _focus={{
                                            bg: 'whiteAlpha.300',
                                        }}
                                    />
                                    <IconButton
                                        bg={useColorModeValue('red.400', 'red.500')}
                                        color={useColorModeValue('white', 'gray.800')}
                                        _hover={{
                                            bg: 'red.400',
                                        }}
                                        aria-label="Subscribe"
                                        icon={<BiMailSend/>}
                                    />
                                </Stack>
                            </Stack>
                        </SimpleGrid>
                    </Container>
                </Box>
                <Box
                    bg={useColorModeValue('gray.50', 'gray.900')} className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </Box>
            </div>
        </footer>
    )
}
export default Footer;