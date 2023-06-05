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
import { ChromePicker } from 'react-color';


export default function VehicleEdit() {
 const navigate = useNavigate();
 const { ID_VEHICLE } = useParams();

 const [model, setModel] = useState('')
 const [brand, setBrand] = useState('')
 const [year, setYear] = useState('')
 const [regis, setRegis] = useState('')
 const [num, setNum] = useState('')
 const [mil, setMil] = useState('')
 const [color, setColor] = useState('')
 const [image, setImage] = useState('')
    
    useEffect(()=>{
        fetchVehicle(); 
    },[])
    const fetchVehicle = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/vehicle/${ID_VEHICLE}`);
          const { vehicle } = response.data;
          if (vehicle) {
            const {
              VEHICLE_MODEL,
              VEHICLE_BRAND,
              VEHICLE_MANUFACTURING_YEAR,
              VEHICLE_REGISTRATION,
              CHASSIS_NUMBER,
              VEHICLE_MILEAGE,
              color,
              image,
            } = vehicle;
            setModel(VEHICLE_MODEL || '');
            setBrand(VEHICLE_BRAND || '');
            setYear(VEHICLE_MANUFACTURING_YEAR || '');
            setRegis(VEHICLE_REGISTRATION || '');
            setNum(CHASSIS_NUMBER || '');
            setMil(VEHICLE_MILEAGE || '');
            setColor(color || '');
            setImage(image || '');
          } else {
            console.log('Vehicle data not found');
          }
        } catch (error) {
          console.log(error.message);
        }
      };
      
    const changeHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const updateVehicle = async (e) => {
      e.preventDefault();
      
        const data = {
            VEHICLE_MODEL : model,
            VEHICLE_BRAND : brand,
            VEHICLE_MANUFACTURING_YEAR : year,
            VEHICLE_REGISTRATION : regis,
            CHASSIS_NUMBER : num,
            VEHICLE_MILEAGE : mil,
            color : color,
            image : image,
        
      };
      
      await axios.patch(`http://127.0.0.1:8000/api/vehicle/${ID_VEHICLE}`, data)
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
          <Heading fontSize={'4xl'}>Update vehicle</Heading>
        </Stack>
        <form onSubmit={updateVehicle}>
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
     
   