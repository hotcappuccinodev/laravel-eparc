import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './style/index.css';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import HomePage from './pages/Home';
import VehicleForm from './pages/Vehicle/VehicleForm';
import VehicleList from './pages/Vehicle/VehicleList';
import InsuranceForm from './pages/Insurance/InsuranceForm';
import DriverForm from './pages/Driver/DriverForm';
import Admin from './pages/admin';
import DriverList from './pages/Driver/DriversList';
import DriverEdit from './pages/Driver/DriverUpdate';
import VehicleEdit from './pages/Vehicle/VehicleUpdate';
import InsuranceList from './pages/Insurance/InsuranceList';
import InsuranceEdit from './pages/Insurance/InsuranceUpdate';
import {Box, ChakraProvider, Grid, theme} from '@chakra-ui/react';
import { ColorModeSwitcher } from './init/ColorModeSwitcher'

function App() {

    return (
        <ChakraProvider theme={theme} className={"screen"}>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" position={'relative'}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/vehicle/Add" element={<VehicleForm/>}/>
                            <Route path="/vehicle/List" element={<VehicleList/>}/>
                            <Route path="/insurance/Add" element={<InsuranceForm/>}/>
                            <Route path="/driver/Add" element={<DriverForm/>}/>
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/driver/List" element={<DriverList/>} />
                            <Route path="/driver/edit/:ID_DRIVER" element={<DriverEdit />} />
                            <Route path="/vehicle/edit/:ID_VEHICLE" element={<VehicleEdit />} />
                            <Route path="/insurance/List" element={<InsuranceList />} />
                            <Route path="/insurance/edit/:ID_INSURANCE" element={<InsuranceEdit />} />


                        </Routes>
                    </BrowserRouter>
                    <Box position={'absolute'} right={5} bottom={5}>
                        <ColorModeSwitcher/>
                    </Box>
                </Grid>
            </Box>
        </ChakraProvider>
    );
}

export default App;
