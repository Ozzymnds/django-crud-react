import axios from 'axios'


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
};


export const createTask = async (task) => {
    try {
        const res = await axios.post('http://localhost:8000/tasks/api/v1/tasks/', task, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(res.data);
        return res;  // Return the response
    } catch (error) {
        console.error('Error creating task: ', error);
        return null;  // Return null or throw an error to handle it in the calling function
    }
};

export const deleteTask = async (taskId) => {
    try {
        const res = await axios.delete(`http://localhost:8000/tasks/api/v1/tasks/${taskId}/`, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(res.data);
        return res;  // Return the response
    } catch (error) {
        console.error('Error deleting task: ', error);
        return null;  // Return null or throw an error to handle it in the calling function
    }
}

export const updateTask = async (taskId, task) => {
    try {
        const res = await axios.put(`http://localhost:8000/tasks/api/v1/tasks/${taskId}/`, task, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(res.data);
        return res;  // Return the response
    } catch (error) {
        console.error('Error updating task: ', error);
        return null;  // Return null or throw an error to handle it in the calling function
    }
}

export const getTask = async (taskId) => {
    try {
        const res = await axios.get(`http://localhost:8000/tasks/api/v1/tasks/${taskId}/`, {
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(res.data);
        return res;  // Return the response
    } catch (error) {
        console.error('Error getting task: ', error);
        return null;  // Return null or throw an error to handle it in the calling function
    }
}