import React from 'react';
import Card from './Card';

const CardList = ({ employees }) => {
    return (
        <>
            {
                employees.map((user, i) => {
                    return (
                        <Card
                        key={i}
                        id={employees[i].id}
                        name={employees[i].name}
                        email={employees[i].email}
                        />
                    );
                })
            }
        </>
    );
}

export default CardList;
