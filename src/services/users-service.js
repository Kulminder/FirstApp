import axiosInstance from '../axios';

class UserDataService {
  fetchAllUsers = () => {
    return axiosInstance.get('/users?page=1&per_page=10')
  }
}

const userDataService = new UserDataService();
export default userDataService;