import { loginUser } from '@/services/userService'
import React, { useEffect, useState } from 'react'

function UserInfor() {
    const [state, setstate] = useState('');
    useEffect(() => {
        (async () => {
            const userInfor = await loginUser()
            console.log('userInfor', userInfor)
            setstate(userInfor)
        })()
    })
    return (
        <div>{state}</div>
    )
}

export default UserInfor
