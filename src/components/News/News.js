import React from 'react';
import { Card, Button } from 'react-bootstrap';

const News = (props) => {
    return (
        <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )

};

export default News;