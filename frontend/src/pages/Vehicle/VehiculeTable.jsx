import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useParams} from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';


export default function DriverEdit() {
 const navigate = useNavigate();
 const { ID_DRIVER } = useParams();

  const [name, setName] = useState('')
  const [Firstname, setFirstName] = useState('')
  const [num, setNum] = useState('')
  const [date, setDate] = useState('')
    
    useEffect(()=>{
        fetchDriver(); 
    },[])
    
    const fetchDriver = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/driver/${ID_DRIVER}`);
        const { data } = response;
        if (data.success) {
          const {
            DRIVER_NAME,
            DRIVER_FIRST_NAME,
            DRIVER_LICENSE_NUMBER,
            DRIVER_LICENSE_EXPIRATION_DATE,
          } = data.data;
          setName(DRIVER_NAME || '');
          setFirstName(DRIVER_FIRST_NAME || '');
          setNum(DRIVER_LICENSE_NUMBER || '');
          setDate(DRIVER_LICENSE_EXPIRATION_DATE || '');
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const updateDriver = async (e) => {
      e.preventDefault();
      
      const data = {
        DRIVER_NAME: name,
        DRIVER_FIRST_NAME: Firstname,
        DRIVER_LICENSE_NUMBER: num,
        DRIVER_LICENSE_EXPIRATION_DATE: date,
      };
      
      await axios.patch(`http://127.0.0.1:8000/api/driver/${ID_DRIVER}`, data)
        .then(({ data }) => {
          console.log(data.message);
          navigate('/');
        })
        .catch((error) => {
          if (error.response && error.response.status === 422) {
            console.log(error.response.data.errors);
          } else {
            console.log(error.message);
          }
        });
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
        <Heading fontSize={'4xl'}>Update a driver</Heading>
      </Stack>
      <form onSubmit={updateDriver}>
        <Stack spacing={4} mt={10}>
          <FormControl>
            <FormLabel>Driver Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter the driver name"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Driver First Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter the driver first name"
              value={Firstname}
              onChange={(e)=>{setFirstName(e.target.value)}}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Driver License Number</FormLabel>
            <Input
              type="number"
              placeholder="Enter the driver license number"
              value={num}
              onChange={(e)=>{setNum(e.target.value)}}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Driver License Expiration Date</FormLabel>
            <Input
              type="date"
              placeholder="Enter the expiration date of the driver's license"
              value={date}
              onChange={(e)=>{setDate(e.target.value)}}
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
     
   