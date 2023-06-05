import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

export default function InsuranceEdit() {
  const navigate = useNavigate();
  const { ID_INSURANCE } = useParams();

  const [company, setCompany] = useState('');
  const [num, setNum] = useState('');
  const [sDate, setSdate] = useState('');
  const [eDate, setEdate] = useState('');
  const [vehicleList, setVehicleList] = useState([]);
  const [selectedVehicleId, setSelectedVehicleId] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/vehicle').then((response) => {
      setVehicleList(response.data.data);
    });

    fetchInsurance();
  }, []);

  const fetchInsurance = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/insurance/${ID_INSURANCE}`);
      const { data } = response;
      if (data.success) {
        const { ID_VEHICLE, INSURANCE_COMPANY, INSURANCE_NUMBER, START_DATE, EXPIRATION_DATE } = data.data;
        setSelectedVehicleId(ID_VEHICLE || '');
        setCompany(INSURANCE_COMPANY || '');
        setNum(INSURANCE_NUMBER || '');
        setSdate(START_DATE || '');
        setEdate(EXPIRATION_DATE || '');
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleVehicleChange = (event) => {
    setSelectedVehicleId(event.target.options[event.target.selectedIndex].value);
  };

  const updateInsurance = async (e) => {
    e.preventDefault();

    const data = {
      ID_VEHICLE: selectedVehicleId,
      INSURANCE_COMPANY: company,
      INSURANCE_NUMBER: num,
      START_DATE: sDate,
      EXPIRATION_DATE: eDate,
    };

    try {
      const response = await axios.patch(`http://127.0.0.1:8000/api/insurance/${ID_INSURANCE}`, data);
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
          <Heading fontSize={'4xl'}>Update Insurance</Heading>
        </Stack>
        <form onSubmit={updateInsurance}>
          <Stack spacing={4} mt={10}>
            <FormControl id="vehicleId">
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
            <FormControl>
              <FormLabel>Insurance Company</FormLabel>
              <Input
                type="text"
                placeholder="Enter insurance company"
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Insurance Number</FormLabel>
              <Input
                type="text"
                placeholder="Enter insurance number"
                value={num}
                onChange={(e) => {
                  setNum(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Start Date</FormLabel>
              <Input
                type="date"
                placeholder="Enter start date"
                value={sDate}
                onChange={(e) => {
                  setSdate(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Expiration Date</FormLabel>
              <Input
                type="date"
                placeholder="Enter expiration date"
                value={eDate}
                onChange={(e) => {
                  setEdate(e.target.value);
                }}
              />
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
                Update
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}
