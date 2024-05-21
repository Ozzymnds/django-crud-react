import axios from 'axios'

// export const getAllTasks = async () => {
//     return await axios.get('http://localhost:8000/tasks/api/v1/tasks/', {
//         withCredentials: false,
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Headers': '*',
//             'Access-Control-Allow-Credentials': 'true',
//             'Content-Type': 'application/json',
//             'Access-Control-Request-Headers': '*'
//         }
//     })
// }


export const getAllTasks = async () => {
    try {
        const res = await axios.get('http://localhost:8000/tasks/api/v1/tasks/', {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(res.data);
        return res;  // Return the response
    } catch (error) {
        console.error('Error fetching tasks: ', error);
        return null;  // Return null or throw an error to handle it in the calling function
    }
}