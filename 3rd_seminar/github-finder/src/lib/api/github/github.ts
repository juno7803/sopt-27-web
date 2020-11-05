import axios from 'axios';

const github = axios.create();
github.defaults.baseURL = "https://api.github.com/";

export default github;