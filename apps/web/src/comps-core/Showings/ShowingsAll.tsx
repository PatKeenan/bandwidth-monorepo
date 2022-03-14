import React from 'react';
import { ContentContainer } from '@comps-features';
import { Button, Empty } from 'antd';
import { Link } from 'react-router-dom';

const NoShowings = () => (
    <Empty>
        <Button type="primary">
            <Link to="/showings/create-new">Create Showing</Link>
        </Button>
    </Empty>
);

export const ShowingsAll = () => {
    return (
        <ContentContainer className="grid items-center">
            <NoShowings />
        </ContentContainer>
    );
};
