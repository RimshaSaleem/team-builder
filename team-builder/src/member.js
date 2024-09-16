import React from 'react';
import { List } from 'semantic-ui-react'
export default function Member(props) {
    const { details } = props;

    if (!details) {
        return <h2>Fetching data</h2>
    }

    return (
        <List>
        <div>
            <p>Name: {details.name}</p>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
        </List>
    )
}