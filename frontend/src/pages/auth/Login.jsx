import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    useDisclosure,
    useToast
} from '@chakra-ui/react';
import {useRef, useState} from 'react';
import FooterBanner from '../../components/footerBanner';
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons';
import {Link as ReachLink} from 'react-router-dom';
import axios from '../../plugins/axios';

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);

    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    async function handlePasswordInputChange(e) {
        await setPasswordInput(e.target.value);
        await setPasswordError(e.target.value === '');
    }

    const [emailErrorMsg, setEmailErrorMsg] = useState('Email is required.');

    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const {isOpen, onOpen, onClose} = useDisclosure()

    const cancelRef = useRef()

    function handleEmailInputChange(e) {
        const email = e.target.value;
        const isEmpty = email === '';
        const isValid = EMAIL_REGEX.test(email);
        setEmailInput(email);
        setEmailError(isEmpty || !isValid);
        if (isEmpty) {
            setEmailErrorMsg('Email is required.');
        } else if (!isValid) {
            setEmailErrorMsg('Please enter a valid email address');
        } else {
            setEmailErrorMsg('');
        }
    }

    const toast = useToast();

    async function handleLogin(e) {

        e.preventDefault();

        await setPasswordError(passwordInput === '');
        await setEmailError(emailInput === '');

        if (emailError || passwordError || passwordInput === '' || emailInput === '') {
            await toast({
                title: 'Please validate all fields.',
                status: 'error',
                position: 'bottom-right',
                isClosable: true,
            })
            return;
        }

        try {
            const response = await axios({
                method: 'POST',
                url: '/login',
                data: {
                    email: emailInput,
                    password: passwordInput,
                    rememberMe: rememberMe
                },
            })
            console.log(response)

        } catch (error) {
            console.log(error)
            onOpen();
        }
    }

    return (
        <div className={'h-screen max-h-screen relative'}>
            <Stack height={'100vh'} direction={{base: 'column', md: 'row'}}>
                <Flex flex={1} align={'center'} justify={'center'} className={'pt-10 md:pt-0'}>
                    <Stack p={8} spacing={4} w={'full'} maxW={'md'}>
                        <Heading fontSize={'2xl'} mb={'10'}>
                            Sign in to your account
                        </Heading>
                        <FormControl id="email" isInvalid={emailError} isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" value={emailInput} onChange={handleEmailInputChange}/>
                            {emailError ? (
                                <FormErrorMessage>{emailErrorMsg}</FormErrorMessage>
                            ) : (<br/>)}
                        </FormControl>
                        <FormControl id="password" isInvalid={passwordError} isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} value={passwordInput}
                                       onChange={handlePasswordInputChange}/>
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() => setShowPassword(showPassword => !showPassword)}
                                    >
                                        {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {passwordError ? (
                                <FormErrorMessage>Password is required.</FormErrorMessage>
                            ) : (<br/>)}
                        </FormControl>
                        <Stack spacing={'16'}>
                            <Stack
                                direction={{base: 'row'}}
                                align={'start'}
                                justify={'space-between'}
                            >
                                <Checkbox>Remember me</Checkbox>
                                <Button
                                    as={ReachLink}
                                    to={'/register'}
                                    variant={'link'}
                                    color={'red.400'}
                                    align={'justify'}
                                    ml={'2'}
                                >
                                    Forgot password ?
                                </Button>
                            </Stack>
                            <Button bg={'red.400'} variant={'solid'}
                                    loadingText="Submitting"
                                    type="submit"
                                    size="lg"
                                    color={'white'}
                                    onClick={handleLogin}
                                    _hover={{
                                        bg: 'red.500',
                                    }}
                            >
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
                <Flex display={{base: "none", md: "flex"}} flex={1} zIndex={'-2'} align={'center'} justify={'center'}
                      p={10}>
                    <Image
                        alt={'Login Image'}
                        objectFit={'cover'}
                        p={8}
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
            <>
                <AlertDialog
                    motionPreset='slideInBottom'
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                    isOpen={isOpen}
                    isCentered
                >
                    <AlertDialogOverlay/>

                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <Flex alignItems={'center'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                     fill="none" aria-hidden="true" focusable="false" className="sc-9e9a943c-6 eiTZPY">
                                    <circle cx="24" cy="24" r="24" fill="#f56565" fillOpacity="0.2"></circle>
                                    <circle cx="24" cy="35" r="3" fill="#f56565"></circle>
                                    <circle cx="24" cy="35" r="3" stroke="#f56565"></circle>
                                    <rect x="22" y="10" width="4" height="18" rx="2" fill="#f56565"></rect>
                                </svg>
                                <Text fontSize={20} color={'red.400'} pl={5}>Error</Text>
                            </Flex>
                        </AlertDialogHeader>
                        <AlertDialogCloseButton/>
                        <AlertDialogBody fontSize={20}>
                            Email or Password is incorrect ! verify your credentials and try again.
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button colorScheme='red' ml={3} ref={cancelRef} onClick={onClose}>
                                Ok
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </>
        </div>
    )
        ;
}
