import React, { useEffect, useState } from 'react'

function User() {
    const [profile, setProfile] = useState(null);

    useEffect( () => setTimeout(async ()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await res.json();
        setProfile(data);
    }, 5000))
    return (
        <div className="user">
            <h2>User details</h2>
       

        {profile &&  (
            <div className="profile">
                <h3> {profile.usernane}</h3>
                <p>{profile.email}</p>
                <a href={profile.website}>{profile.website}</a>
            </div>
        )}
        {!profile && <p>Loading ...</p>}

</div>
    )
}

export default User
