import React from 'react';
import FormCreateEdit from './components/FormCreateEdit';
import {useHistory} from 'react-router-dom';

const ActivitiesEdit = () => {

    const history = useHistory();
    const organizationData = history.location.state;
    console.log("Que hay aca")
    console.log(organizationData)
    return (
        <FormCreateEdit mode={'editMode'} organizationData={organizationData} />
    );
};

export default ActivitiesEdit;