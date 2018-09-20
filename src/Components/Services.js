import axios from 'axios';

class EmployeeService {

    deleteEmployee(id) {
        axios.get('http://localhost:4000/employees/deleteEmployee/' + id)
            .then(() => {
                console.log('Employee Deleted !!!')
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export default EmployeeService;