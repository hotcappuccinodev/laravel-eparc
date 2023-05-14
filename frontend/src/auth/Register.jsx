import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
} from '@chakra-ui/react';
import {useState} from 'react';
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons';
import {Link as ReachLink} from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from '../plugins/axios';
import FooterBanner from "../components/footerBanner";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleChange = e => {
        setData({
            ...data,
            [e.target.id]: e.target.value,
        });
    };

    const handleRegister = async e => {
        e.preventDefault();
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

    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    return (
        <div className={'h-screen max-h-screen relative'}>
            <Stack minH={'100vh'} direction={{base: 'column', md: 'row'}}>
                <Flex display={{base: "none", md: "flex"}} flex={1}  p={8} align={'center'} justify={'center'}>
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
                    <form onSubmit={handleRegister}>
                        <Stack spacing={4} w={'full'} maxW={'md'}>
                            <Heading fontSize={'2xl'} mb={'10'}>
                                Creat a new account
                            </Heading>
                            <HStack>

                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" onChange={handleChange}/>
                                </FormControl>

                                <FormControl id="lastName">
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" onChange={handleChange}/>
                                </FormControl>

                            </HStack>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" onChange={handleChange}/>
                            </FormControl>
                            <FormControl id="password" isRequired>
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
                            </FormControl>
                            <FormControl id="password_confirmation" isRequired>
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
                            </FormControl>
                            <Stack spacing={15} pt={2} mt={'10'}>
                                <Button
                                    loadingText="Submitting"
                                    type="submit"
                                    size="lg"
                                    bg={'red.400'}
                                    color={'white'}
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
                    </form>
                </Flex>
            </Stack>
            <div className={'absolute bottom-0 w-full z-[-1] opacity-50'}>
                <FooterBanner/>
            </div>
        </div>
    );
}
