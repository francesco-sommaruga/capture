import {useState} from 'react';

const useToggle = (bool) => {
    const [toggle, setToggle] = useState(bool);
    const handleToggle = () => setToggle(!toggle);
    return [toggle, handleToggle];
}

export default useToggle;