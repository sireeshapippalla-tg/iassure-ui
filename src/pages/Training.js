import { Assessment } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Training = () => {
    const navigate = useNavigate();
    const onhandleClick = () => {
        navigate('/trainig/assessement-details');
    };
    return (
        <div>
            <button onClick={onhandleClick}>Click</button>
        </div>
    )
}

export default Training