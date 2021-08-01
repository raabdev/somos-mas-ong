import React from 'react';
import FormCreateEdit from './components/FormCreateEdit';
import {useHistory} from 'react-router-dom';

const ActivitiesEdit = () => {

    const history = useHistory();
    const activitiesData = history.location.state;

    return (
        <FormCreateEdit mode={'editMode'} activitiesData={activitiesData} />
    );
};

export default ActivitiesEdit;