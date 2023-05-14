import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './style/index.css';
import Register from './auth/Register';
import Login from './auth/Login';
import HomePage from './Home';
import VehicleForm from './Vehicle/VehicleForm';
import List from './Vehicle/VehicleList';
import InsuranceForm from './Insurance/InsuranceForm';
import DriverForm from './Driver/DriverForm';
import Admin from './admin';
import {Box, ChakraProvider, Grid, theme} from '@chakra-ui/react';
import {ColorModeSwitcher} from './init/ColorModeSwitcher'

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
                            <Route path="/VehicleAdd" element={<VehicleForm/>}/>
                            <Route path="/VehicleList" element={<List/>}/>
                            <Route path="/InsuranceAdd" element={<InsuranceForm/>}/>
                            <Route path="/DriverAdd" element={<DriverForm/>}/>
                            <Route path="/admin" element={<Admin/>}/>
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
