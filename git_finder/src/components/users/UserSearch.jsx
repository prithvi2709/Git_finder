import React from 'react';
import { useState , useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

const UserSearch = () => {

    const [text, setText] = useState('');

    const handleChange = (e) => setText(e.target.value);

    const { users, searchUsers, clearUsers } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);
    
    const handleClearBtn = () => {
        clearUsers();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Search is empty!!', 'error');
        }
        else {
            searchUsers(text);
            setText('');
        }
    }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mb-8 gap-8' >
            <div>
                <form onSubmit={handleSubmit} >
                    <div className='form-control' >
                        <div className='relative' >
                            <input type='text'
                                className='w-full pr-40 bg-gray-200 input input-md text-black'
                                placeholder='Search'
                                value={text}
                                onChange={handleChange}
                            />
                            <button type='submit'
                                className='absolute top-0 right-0 rounded-l-none w-32 btn btn-md'
                            >Go</button>
                        </div>
                    </div>
                </form>
            </div>
            <div >
             {users.length > 0 && (<div>
                <button onClick={handleClearBtn} className="btn btn-ghost btn-md ">Clear</button>
            </div>)  }   
            </div>
            
        </div>
    )
}

export default UserSearch
