import React, { useState } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';

export default function VehicleForm() {
    const [formData, setFormData] = useState({
        VEHICLE_MODEL: '',
        VEHICLE_BRAND: '',
        VEHICLE_MANUFACTURING_YEAR: '',
        VEHICLE_REGISTRATION: '',
        CHASSIS_NUMBER: '',
        VEHICLE_MILEAGE: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
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
                    <Heading fontSize={'4xl'}>Add vehicle</Heading>
                </Stack>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4} mt={10}>
                        <FormControl id="VEHICLE_MODEL">
                            <FormLabel>Vehicle Model</FormLabel>
                            <Input type="text" placeholder="Enter vehicle model" onChange={handleInputChange} />
                        </FormControl>
                        <FormControl id="VEHICLE_BRAND">
                            <FormLabel>Vehicle Brand</FormLabel>
                            <Input type="text" placeholder="Enter vehicle brand" onChange={handleInputChange} />
                        </FormControl>
                        <FormControl id="VEHICLE_MANUFACTURING_YEAR">
                            <FormLabel>Vehicle Manufacturing Year</FormLabel>
                            <Input type="text" placeholder="Enter vehicle manufacturing year" onChange={handleInputChange} />
                        </FormControl>
                        <FormControl id="VEHICLE_REGISTRATION">
                            <FormLabel>Vehicle Registration</FormLabel>
                            <Input type="text" placeholder="Enter vehicle registration" onChange={handleInputChange} />
                        </FormControl>
                        <FormControl id="CHASSIS_NUMBER">
                            <FormLabel>Chassis Number</FormLabel>
                            <Input type="text" placeholder="Enter chassis number" onChange={handleInputChange} />
                        </FormControl>
                        <FormControl id="VEHICLE_MILEAGE">
                            <FormLabel>Vehicle Mileage</FormLabel>
                            <Input type="text" placeholder="Enter vehicle mileage" onChange={handleInputChange} />
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