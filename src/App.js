import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';

const App = () => {
    const [term, setTerm] = useState('');
    const [usersData, setUsersData] = useState([]);
    const [displayUsers, setDisplayUsers] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
            const data = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsersData(data.data);
        };
        getUsers();
    },[])

    useEffect(() => {
            const list = usersData.map((user) => {
                if (user.name.includes(term) || user.email.includes(term)){
                    return <div key={user.id}>{`Name: ${user.name}`}</div>;
                } else return null;
            });
            setDisplayUsers(list);
    },[usersData, term])

    return (
        <div>
            <SearchBar term={term} onTermChange={setTerm} />
            <div>
                <h1>Users</h1>
                {displayUsers}
            </div>
        </div>
    );
};

export default App;