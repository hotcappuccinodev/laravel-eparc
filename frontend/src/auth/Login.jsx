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
    Text,
} from '@chakra-ui/react';
import {useState} from 'react';
import footer from '../components/footer';
import {Link as ReachLink} from 'react-router-dom';
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <Stack minH={'100vh'} direction={{base: 'column', md: 'row'}}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
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
                            <Link color={'red.500'}>Forgot password?</Link>
                        </Stack>
                        <Button colorScheme={'red'} variant={'solid'}>
                            Sign in
                        </Button>
                    </Stack>
                    <Stack pt={6}>
                        <Text align={'center'}>
                            You D'ont Have a Account ?{' '}
                            <Link color={'red.400'} as={ReachLink} to={'/login'}>
                                <ReachLink to={'/register'}>Register</ReachLink>
                            </Link>
                        </Text>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1} className={'hidden md:block'}>
                <Image
                    alt={'Login Image'}
                    h={'100vh'}
                    w={'100%'}
                    p={'10'}
                    objectFit={'cover'}
                    className={'hidden md:block'}
                    src={
                        '/login.svg'
                    }
                />
            </Flex>
            <footer/>
        </Stack>
    );
}
