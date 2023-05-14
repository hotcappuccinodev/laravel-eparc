import React, {useEffect, useState} from 'react';
import {Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, useColorModeValue,} from '@chakra-ui/react';
import axios from 'axios';

export default function DriverForm() {
    const [vehicleList, setVehicleList] = useState([]);
    const [selectedVehicleId, setSelectedVehicleId] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/driver').then((response) => {
            setVehicleList(response.data.data);
        });
    }, []);

    const handleVehicleChange = (event) => {
        setSelectedVehicleId(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Box
                maxW={'2xl'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
            >
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Add a new driver</Heading>
                </Stack>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4} mt={10}>
                        <FormControl id="DRIVER_NAME">
                            <FormLabel>Driver Name</FormLabel>
                            <Input type="text" placeholder="Enter the driver name"/>
                        </FormControl>
                        <FormControl id="DRIVER_FIRST_NAME">
                            <FormLabel>Driver First Name</FormLabel>
                            <Input type="text" placeholder="Enter the driver first name"/>
                        </FormControl>
                        <FormControl id="DRIVER_LICENSE_NUMBER">
                            <FormLabel>Driver License Number</FormLabel>
                            <Input type="number" placeholder="Enter the driver license number"/>
                        </FormControl>
                        <FormControl id="DRIVER_LICENSE_EXPIRATION_DATE">
                            <FormLabel> Driver License Expiration Date</FormLabel>
                            <Input type="date" placeholder="Enter the expiration date of the driver's license"/>
                        </FormControl>
                        <Stack
                            spacing={10}
                            direction={{base: 'column', sm: 'row'}}
                            align={'center'}
                            justify={'center'}
                            mt={6}
                        >
                            <Button
                                type="submit"
                                w={{base: 'full', sm: 'auto'}}
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                            >
                                Submit
                            </Button>
                        </Stack>
                    </Stack>
                </form>
            </Box>
        </Flex>
    );
}
