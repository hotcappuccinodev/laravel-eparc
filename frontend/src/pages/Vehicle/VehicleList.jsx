import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function VehicleList() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/vehicle');
      console.log('Response:', response.data);
      setVehicles(response.data.data);
    } catch (error) {
      console.log('Error fetching vehicles:', error);
    }
  };
 
  const deleteVehicle = async (ID_VEHICLE) => {
    try {
        await axios.delete('http://127.0.0.1:8000/api/vehicle/' + ID_VEHICLE);
        console.log('Vehicle deleted successfully');
      fetchVehicles();
    } catch (error) {
      console.log('Error deleting vehicle:', error);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Vehicles</h1>
          <p className="mt-2 text-sm text-gray-700">A list of all the vehicles</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            as={Link}
            to="/VehicleAdd"
            style={{ backgroundColor: '#4C51BF' }}
          >
            Add vehicle
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      Vehicle Model
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      Vehicle Brand
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      Manufacturing Year
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      Vehicle Registration
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      Chassis Number
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      Vehicle Mileage
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      Vehicle Color
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      Vehicle Image
                    </th>
                                      
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white dark:bg-gray-900">
                  {vehicles.length > 0 &&
                    vehicles.map((vehicle) => (
                      <tr key={vehicle.ID_VEHICLE} className="hover:bg-gray-100">
                        <td className="py-4">{vehicle.VEHICLE_MODEL}</td>
                        <td className="py-4">{vehicle.VEHICLE_BRAND}</td>
                        <td className="py-4">{vehicle.VEHICLE_MANUFACTURING_YEAR}</td>
                        <td className="py-4">{vehicle.VEHICLE_REGISTRATION}</td>
                        <td className="py-4">{vehicle.CHASSIS_NUMBER}</td>
                        <td className="py-4">{vehicle.VEHICLE_MILEAGE}</td>
                            <td className="py-4">{vehicle.color}</td>
                            <td className="py-4">
                        <div className="flex items-center justify-center space-x-2">
                                <img
                                className="h-32 w-32 object-contain"
                                src={`http://127.0.0.1:8000/storage/vehicle/image/${vehicle.image}`}
                                alt="Vehicle"
                                />
                            </div>
                            </td>

                        <td className="flex items-center justify-center space-x-2 py-4">
                        <Link
                            className="btn btn-success mb-2 mr-2"
                            to={`/vehicle/edit/${vehicle.ID_VEHICLE}`}
                        >
                            <FaEdit className="text-lg text-green-500" />
                        </Link>
                        <button
                            type="button"
                            className="btn btn-danger mb-2"
                            onClick={() => deleteVehicle(vehicle.ID_VEHICLE)}
                        >
                            <FaTrash className="text-lg text-red-500" />
                        </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
