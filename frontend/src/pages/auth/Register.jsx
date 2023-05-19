import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    HStack,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    useToast
} from '@chakra-ui/react';
import {useState} from 'react';
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons';
import {Link as ReachLink} from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from '../../plugins/axios';
import FooterBanner from "../../components/footerBanner";

export default function Register() {

    const [showPassword, setShowPassword] = useState(false);

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const toast = useToast();

    const handleChange = async e => {
        await setData({
            ...data,
            [e.target.id]: e.target.value,
        });
        await handleError();
    };

    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const [emailError, setEmailError] = useState(false)
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)

    const [emailErrorMsg, setEmailErrorMsg] = useState('Email is required.');
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('Password is required.');
    const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState('Confirm Password is required.');

    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleError = async () => {
        await setEmailError(data.email === '');
        await setPasswordError(data.password === '');
        await setFirstNameError(data.firstName === '');
        await setLastNameError(data.lastName === '');
        await setConfirmPasswordError(data.password_confirmation === '');
    };

    const handleRegister = async e => {

        e.preventDefault();

        await handleError();

        if (emailError || passwordError || firstNameError || lastNameError || confirmPasswordError || data.password !== data.password_confirmation || data.password.length < 8 || data.password_confirmation.length < 8) {
            await toast({
                title: 'Please validate all fields.',
                status: 'error',
                position: 'bottom-right',
                isClosable: true,
            })
            return;
        }

        console.log(data);

        try {
            const response = await axios({
                method: 'POST',
                url: '/register',
                data: {
                    email: data.email,
                    password: data.password,
                },
            })
            console.log(response)
            Swal.fire('Connexion réussie', '', 'success').then(() => {
                localStorage.setItem('patient', JSON.stringify(response.data.patient))
                localStorage.setItem('patient-token', response.data.token)
                // navigate(-2)
            })
        } catch (error) {
            console.log(error)
            await Swal.fire('Erreur', '', 'error')
        }

    };

    return (
        <div className={'h-screen max-h-screen relative'}>
            <Stack minH={'100vh'} direction={{base: 'column', md: 'row'}}>
                <Flex display={{base: "none", md: "flex"}} flex={1} p={8} align={'center'} justify={'center'}>
                    <Image
                        className={'hidden md:block'}
                        alt={'Login Image'}
                        objectFit={'cover'}
                        src={
                            '/register.svg'
                        }
                        p={8}
                    />
                </Flex>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={4} w={'full'} maxW={'md'}>
                        <Heading fontSize={'2xl'} mb={'10'}>
                            Creat a new account
                        </Heading>
                        <HStack>

                            <FormControl id="firstName" isInvalid={firstNameError} isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input type="text" value={data.firstName} onChange={handleChange}/>
                                {firstNameError ? (
                                    <FormErrorMessage>First Name is required</FormErrorMessage>
                                ) : (<br/>)}
                            </FormControl>

                            <FormControl id="lastName" isInvalid={lastNameError} isRequired>
                                <FormLabel>Last Name</FormLabel>
                                <Input type="text" onChange={handleChange}/>
                                {lastNameError ? (
                                    <FormErrorMessage>Last Name is required</FormErrorMessage>
                                ) : (<br/>)}
                            </FormControl>

                        </HStack>
                        <FormControl id="email" isInvalid={emailError} isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" onChange={handleChange}/>
                            {emailError ? (
                                <FormErrorMessage>{emailErrorMsg}</FormErrorMessage>
                            ) : (<br/>)}
                        </FormControl>
                        <FormControl id="password" isInvalid={passwordError} isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={handleChange}
                                />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword(showPassword => !showPassword)
                                        }
                                    >
                                        {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {passwordError ? (
                                <FormErrorMessage>{passwordErrorMsg}</FormErrorMessage>
                            ) : (<br/>)}
                        </FormControl>
                        <FormControl id="password_confirmation" isInvalid={confirmPasswordError} isRequired>
                            <FormLabel>Confirm Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPasswordConfirm ? 'text' : 'password'}
                                    onChange={handleChange}
                                />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPasswordConfirm(
                                                showPasswordConfirm => !showPasswordConfirm
                                            )
                                        }
                                    >
                                        {showPasswordConfirm ? <ViewIcon/> : <ViewOffIcon/>}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {confirmPasswordError ? (
                                <FormErrorMessage>{confirmPasswordErrorMsg}</FormErrorMessage>
                            ) : (<br/>)}
                        </FormControl>
                        <Stack spacing={15} pt={2} mt={'10'}>
                            <Button
                                loadingText="Submitting"
                                type="submit"
                                size="lg"
                                bg={'red.400'}
                                color={'white'}
                                onClick={handleRegister}
                                _hover={{
                                    bg: 'red.500',
                                }}
                            >
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6} align={'center'}>
                            <Text display={'flex'}>
                                Already a user? {'  '}
                                <Button
                                    as={ReachLink}
                                    to={'/login'}
                                    variant={'link'}
                                    color={'red.400'}
                                    align={'justify'}
                                    ml={'2'}
                                >
                                    Login
                                </Button>
                            </Text>
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>
            <div className={'absolute bottom-0 w-full z-[-1] opacity-50'}>
                <FooterBanner/>
            </div>
        </div>
    );
}
