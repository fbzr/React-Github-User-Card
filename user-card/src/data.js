import axios from 'axios';

export default async login => {
    try {
      const res = await axios.get(`https://api.github.com/users/${login}`);
      return res.data;
    } catch(err) {
      return {};
    }
}