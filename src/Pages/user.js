import React, { useState, useEffect } from 'react'
import { getLoggedInUser, getToken } from '../Utls/auth';

export const User = () => {

    useEffect(() => {
        fetch(`http://localhost:8000/api/dev/${getLoggedInUser().did}`, {
            headers: {
                "Authorization": getToken()
            }
        }).then(async res => {
            console.log(await res.json());
        });
    }, [])
    return (
        <div>User</div>
    )
}
