import { createContext } from "react";
import { useReducer } from "react";
import githubReducer from "./GithubReducer";
import axios from 'axios';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_URL
const GITHUB_TOKEN = process.env.REACT_APP_TOKEN

export const GithubProvider = ({ children }) => {

    const initalState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    // Get user repos
  const getUserRepos = async (login) => {
    setLoading()

    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    })

    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    )

    const data = await response.json()

    dispatch({
      type: 'GET_REPOS',
      payload: data,
    })
  }

    const [state,dispatch] = useReducer(githubReducer, initalState);

    // SEARCH USERS
    const searchUsers = async (text) => {
        setLoading();

        const params = new URLSearchParams({
            q: text,
        })

        const response = await axios.get(`${GITHUB_URL}/search/users?${params}`, 
        {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        });
        const { items } = response.data;
        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    // GET USERS
    const getUser = async (login) => {
        setLoading();

        const response = await axios(`${GITHUB_URL}/users/${login}`, 
        {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
            });
        const data = response.data;

        dispatch({
            type: 'GET_USER',
            payload: data
        })
    }

    const setLoading = () => { dispatch({ type: 'SET_LOADING' }) };

    const clearUsers = () => { dispatch({ type: 'CLEAR_USERS' }) };

    return (
        <GithubContext.Provider value={{users: state.users, repos: state.repos, getUserRepos,user: state.user ,loading: state.loading, getUser ,searchUsers,clearUsers}}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;