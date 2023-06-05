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
    Spinner,
    Stack,
    Text,
    useToast
} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons';
import {Link as ReachLink, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from '../../plugins/axios';
import FooterBanner from "../../components/footerBanner";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [isHandelRegister, setIsHandelRegister] = useState(false);

    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const [flag, setFlag] = useState(false);

    const navigate = useNavigate();
    const toast = useToast();


    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        password_confirmation: false,
    });

    useEffect(() => {
        if (flag) {
            setErrors({
                ...errors,
                password_confirmation:
                    data.password_confirmation === '' ||
                    data.password !== data.password_confirmation,
            });
        }
    }, [data.password, data.password_confirmation]);


    const handleChange = async (e) => {
        const {id, value} = e.target;
        await setData({
            ...data,
            [id]: value,
        });
        if (flag) {
            await setErrors({
                ...errors,
                [id]: value === '',
                firstName: data.firstName === '',
                lastName: data.lastName === '',
                email: data.email === '' || !EMAIL_REGEX.test(data.email),
                password: data.password === '' || data.password.length < 8,
                password_confirmation: data.password_confirmation === '' || data.password_confirmation !== data.password_confirmation
            });
        }
        if (id === 'password_confirmation') {
            setErrors({
                ...errors,
                password_confirmation:
                    value === '' || value !== data.password
            });
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setFlag(true);
        setIsHandelRegister(true);

        const {
            firstName,
            lastName,
            email,
            password,
            password_confirmation,
        } = data;

        setErrors({
            firstName: firstName === '',
            lastName: lastName === '',
            email: email === '' || !EMAIL_REGEX.test(email),
            password: password === '' || password.length < 8,
            password_confirmation: password_confirmation === '' || password !== password_confirmation,
        });

        if (
            firstName === '' ||
            lastName === '' ||
            email === '' ||
            password === '' ||
            password_confirmation === '' ||
            !EMAIL_REGEX.test(email) ||
            password !== password_confirmation ||
            password.length < 8
        ) {
            setIsHandelRegister(false); 
            toast({
                title: 'Please fill in all required fields.',
                status: 'error',
                position: 'bottom-right',
                isClosable: true,
            });
            return;
        }

        try {
            const response = await axios({
                method: 'POST',
                url: '/register',
                data: {
                    firstName,
                    lastName,
                    email,
                    password,
                    password_confirmation,
                },
            });
            setIsHandelRegister(false);
            Swal.fire('Registration successful', '', 'success').then(() => {
                navigate('/login');
            });
        } catch (error) {
            setIsHandelRegister(false);
            Swal.fire('Error', '', 'error');
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
                            <FormControl id="firstName" isInvalid={errors.firstName} isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input type="text" value={data.firstName} onChange={handleChange}
                                       onBlur={handleChange}/>
                                {errors.firstName && (
                                    <FormErrorMessage>First Name is required</FormErrorMessage>
                                ) || (<br/>)}
                            </FormControl>
                            <FormControl id="lastName" isInvalid={errors.lastName} isRequired>
                                <FormLabel>Last Name</FormLabel>
                                <Input type="text" onChange={handleChange} onBlur={handleChange}/>
                                {errors.lastName && (
                                    <FormErrorMessage>Last Name is required</FormErrorMessage>
                                ) || (<br/>)}
                            </FormControl>
                        </HStack>
                        <FormControl id="email" isInvalid={errors.email} isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" onChange={handleChange} onBlur={handleChange}/>
                            {errors.email && (
                                <FormErrorMessage>Email is required and should be a valid email
                                    address</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl id="password" isInvalid={errors.password} isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={handleChange} onBlur={handleChange}
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
                            {errors.password && (
                                <FormErrorMessage>
                                    Password is required and should be at least 8 characters long
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl id="password_confirmation" isInvalid={errors.password_confirmation} isRequired>
                            <FormLabel>Confirm Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPasswordConfirm ? 'text' : 'password'}
                                    onChange={handleChange}
                                    onBlur={() =>
                                        setErrors({
                                            ...errors,
                                            password_confirmation:
                                                data.password_confirmation === '' ||
                                                data.password !== data.password_confirmation
                                                    ? 'Confirm Password is required or does not match Password'
                                                    : '',
                                        })
                                    }
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
                            {errors.password_confirmation && (
                                <FormErrorMessage>Confirm Password is required</FormErrorMessage>
                            )}
                        </FormControl>
                        <Stack spacing={15} pt={2} mt={'10'}>
                            <Button bg={isHandelRegister && 'red.200' || 'red.400'} variant={'solid'}
                                    className={isHandelRegister && 'cursor-not-allowed'}
                                    loadingText="Submitting"
                                    type="submit"
                                    size="lg"
                                    color={'white'}
                                    onClick={handleRegister}
                                    _hover={{
                                        bg: !isHandelRegister && 'red.500',
                                    }}
                            >
                                Sign in
                                &nbsp;&nbsp;
                                {isHandelRegister && <Spinner/>}
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