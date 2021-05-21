import React from "react";
import style from "./Users.module.css"

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://sun9-39.userapi.com/s/v1/ig1/3KZsrJpsczNSqXazC695IJSXIIlz-Bcf47LQfQIzhCF8nLZeIEKYSVJoLOz1yJyUvrqmF28S.jpg?size=200x0&quality=96&crop=529,25,1531,1532&ava=1',
                    followed: true,
                    fullName: 'Alex',
                    status: 'I\`m React programmer',
                    location: {city: 'Smorgon', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://sun6-23.userapi.com/s/v1/ig1/knY9BugmVGJLPLwIBgVUe6fn4wKvtZklJjLLirCoYbnN72q1nw1u242jXvoq4BT33zohhQRT.jpg?size=200x0&quality=96&crop=3,2,1722,1722&ava=1',
                    followed: true,
                    fullName: 'Nastya',
                    status: 'I\`m JS programmer',
                    location: {city: 'Smorgon', country: 'Belarus'}
                },
                {
                    id: 3,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGXbEdQWAEmEp8DTIxVd_NSgMQBBBTe_MwvxHaf0chtpyvUGrsN8bGGOjXq-5p_EowNY&usqp=CAU',
                    followed: true,
                    fullName: 'Steve',
                    status: 'Apple forever!',
                    location: {city: 'Los Gatos', country: 'US'}
                },
                {
                    id: 4,
                    photoUrl: 'https://n1s1.elle.ru/4e/ff/35/4eff359a8692895b8d3366e9d1a80819/842x805_0xd42ee42a_10048796891446024769.jpeg',
                    followed: true,
                    fullName: 'Bill',
                    status: 'Only Windows, only hardcore',
                    location: {city: 'Medina', country: 'US'}
                },
                {
                    id: 5,
                    photoUrl: 'https://static10.tgstat.ru/channels/_0/27/27ca5ff916c5521ca9fe997692c42f03.jpg',
                    followed: true,
                    fullName: 'Elon',
                    status: 'Go ahead and other crazy ideas',
                    location: {city: 'Los Angeles', country: 'US'}
                },
                {
                    id: 6,
                    photoUrl: 'https://static10.tgstat.ru/channels/_0/bb/bb497e96dc6fbc11c7a6c9b687278abf.jpg',
                    followed: true,
                    fullName: 'Pavel',
                    status: 'Always vkontakte',
                    location: {city: 'Dubai', country: 'UAE'}
                },
                {
                    id: 7,
                    photoUrl: 'https://yt3.ggpht.com/ytc/AAUvwngZIk0v4xGI7MzSZQlhmcJUkrbPC-fcmD1wetEpYg=s900-c-k-c0x00ffffff-no-rj',
                    followed: true,
                    fullName: 'Mark',
                    status: 'I make money on faces',
                    location: {city: 'San Francisco', country: 'US'}
                },
                {
                    id: 8,
                    photoUrl: 'https://lh3.googleusercontent.com/proxy/d_1kFMGh76FyvghIsFuRSvBXoAbncwY2wZzXtxm9RBVejQ-KIgZNlJSAng_dXPD8vD-brDLAuVi0cuyYgjp6DkeNLm2kY1R6kWScHDou3udtYoaKdJ4',
                    followed: false,
                    fullName: 'Marsya',
                    status: 'Walking on my own',
                    location: {city: '>``<', country: '___'}
                },
            ]
        );
    };


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={style.userPhoto} alt="avatar"/>
                    </div>
                    <div>
                        {
                            u.followed
                            ? <button onClick={() => {props.unfoll(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.foll(u.id)}}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;
