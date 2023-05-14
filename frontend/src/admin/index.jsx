import Dash from '../components/admin/dash'
import Table from '../Vehicle/VehiculeTable'
import Table2 from './table'

const Admin = () => {
    return (
        <div>
            <Dash>
                <Table2/>
                <Table/>
            </Dash>
        </div>
    )
};

export default Admin;