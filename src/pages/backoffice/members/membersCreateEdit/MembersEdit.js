import React from 'react';
import FormCreateEdit from './components/FormCreateEdit';
import {useHistory} from 'react-router-dom';

const ActivitiesEdit = () => {

    const history = useHistory();
    const membersData = history.location.state;

    return (
        <FormCreateEdit mode={'editMode'} membersData={membersData} />
    );
};

export default ActivitiesEdit;