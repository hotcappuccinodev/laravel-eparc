import React, { useState, useEffect } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    Button,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';

export default function InsuranceForm() {
    const [vehicleList, setVehicleList] = useState([]);
    const [selectedVehicleId, setSelectedVehicleId] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/vehicle').then((response) => {
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
                    <Heading fontSize={'4xl'}>Add an Insurance</Heading>
                </Stack>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4} mt={10}>
                        <FormControl id="ID_VEHICLE">
                            <FormLabel>Vehicle ID</FormLabel>
                            <Select
                                value={selectedVehicleId}
                                onChange={handleVehicleChange}
                                placeholder="Select a vehicle"
                            >
                                {vehicleList.map((vehicle) => (
                                    <option key={vehicle.ID_VEHICLE} value={vehicle.ID_VEHICLE}>
                                        {vehicle.ID_VEHICLE}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl id="INSURANCE_COMPANY">
                            <FormLabel>Insurance Company</FormLabel>
                            <Input type="text" placeholder="Enter insurance company" />
                        </FormControl>
                        <FormControl id="INSURANCE_NUMBER">
                            <FormLabel>Insurance Number</FormLabel>
                            <Input type="text" placeholder="Enter insurance number" />
                        </FormControl>
                        <FormControl id="START_DATE">
                            <FormLabel>Start Date</FormLabel>
                            <Input type="date" placeholder="Enter start date" />
                        </FormControl>
                        <FormControl id="EXPIRATION_DATE">
                            <FormLabel>Expiration Date</FormLabel>
                            <Input type="date" placeholder="Enter expiration date" />
                        </FormControl>
                        <Stack
                            spacing={10}
                            direction={{ base: 'column', sm: 'row' }}
                            align={'center'}
                            justify={'center'}
                            mt={6}
                        >
                            <Button
                                type="submit"
                                w={{ base: 'full', sm: 'auto' }}
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
