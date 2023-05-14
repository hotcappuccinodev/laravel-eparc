import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Stack,
    Text
} from '@chakra-ui/react';
import {useState} from 'react';
import FooterBanner from '../components/footerBanner';
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons';
import {Link as ReachLink} from 'react-router-dom';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className={'h-screen max-h-screen relative'}>
            <Stack height={'100vh'} direction={{base: 'column', md: 'row'}}>
                <Flex flex={1} align={'center'} justify={'center'} className={'pt-10 md:pt-0'}>
                    <Stack p={8} spacing={4} w={'full'} maxW={'md'}>
                        <Heading fontSize={'2xl'} mb={'10'}>
                            Sign in to your account
                        </Heading>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email"/>
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'}/>
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() => setShowPassword(showPassword => !showPassword)}
                                    >
                                        {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={'16'}>
                            <Stack
                                direction={{base: 'column', sm: 'row'}}
                                align={'start'}
                                justify={'space-between'}
                            >
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'red.400'}>Forgot password?</Link>
                            </Stack>
                            <Button bg={'red.400'} variant={'solid'}
                                    _hover={{
                                        bg: 'red.500',
                                    }}>
                                Sign in
                            </Button>
                        </Stack>
                        <Stack pt={6} align={'center'}>
                            <Text display={'flex'}>
                                You D'ont Have a Account ?{' '}
                                <Button
                                    as={ReachLink}
                                    to={'/register'}
                                    variant={'link'}
                                    color={'red.400'}
                                    align={'justify'}
                                    ml={'2'}
                                >
                                    Register
                                </Button>
                            </Text>
                        </Stack>
                    </Stack>
                </Flex>
                <Flex display={{base: "none", md: "block"}} flex={1} zIndex={'-2'}>
                    <Image
                        alt={'Login Image'}
                        h={'100%'}
                        pt={'6vh'}
                        objectFit={'cover'}
                        className={'z-[-2] hidden md:block object-cover'}
                        src={
                            '/login.svg'
                        }
                    />
                </Flex>
            </Stack>
            <div className={'absolute bottom-0 w-full z-[-1] opacity-50'}>
                <FooterBanner/>
            </div>
        </div>
    );
}
