import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack} from '@chakra-ui/react';
import {ChromePicker} from 'react-color';

export default function VehicleForm() {
    const navigate = useNavigate();
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [year, setYear] = useState('');
    const [regis, setRegis] = useState('');
    const [num, setNum] = useState('');
    const [mil, setMil] = useState('');
    const [color, setColor] = useState('');
    const [image, setImage] = useState('');

    const changeHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const createVehicle = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('VEHICLE_MODEL', model);
        formData.append('VEHICLE_BRAND', brand);
        formData.append('VEHICLE_MANUFACTURING_YEAR', year);
        formData.append('VEHICLE_REGISTRATION', regis);
        formData.append('CHASSIS_NUMBER', num);
        formData.append('VEHICLE_MILEAGE', mil);
        formData.append('color', color);
        formData.append('image', image);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/vehicle', formData);
            console.log(response.data.message);
            navigate('/');
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.log(error.response.data.errors);
            } else {
                console.log(error.message);
            }
        }
    };

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={'gray.50'}
        >
            <Box
                maxW={'2xl'}
                w={'full'}
                bg={'white'}
                boxShadow={'lg'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
            >
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Add a new vehicle</Heading>
                </Stack>
                <form onSubmit={createVehicle}>
                    <Stack spacing={4} mt={10}>
                        <FormControl>
                            <FormLabel>Vehicle Model</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter the vehicle model"
                                value={model}
                                onChange={(e) => {
                                    setModel(e.target.value);
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Vehicle Brand</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter vehicle brand"
                                value={brand}
                                onChange={(e) => {
                                    setBrand(e.target.value);
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Vehicle Manufacturing Year</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter vehicle manufacturing year"
                                value={year}
                                onChange={(e) => {
                                    setYear(e.target.value);
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Vehicle Registration</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter vehicle registration"
                                value={regis}
                                onChange={(e) => {
                                    setRegis(e.target.value);
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Chassis Number</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter chassis number"
                                value={num}
                                onChange={(e) => {
                                    setNum(e.target.value);
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Vehicle Mileage</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter vehicle mileage"
                                value={mil}
                                onChange={(e) => {
                                    setMil(e.target.value);
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Vehicle Color</FormLabel>
                            <ChromePicker
                                color={color}
                                onChange={(value) => {
                                    setColor(value.hex);
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Vehicle Image</FormLabel>
                            <Input
                                type="file"
                                onChange={changeHandler}
                            />
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
