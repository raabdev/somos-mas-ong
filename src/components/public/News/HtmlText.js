import React from 'react';

const HtmlText = ({text}) => {

    function createMarkup() {
        return {__html: text};
    }

    return (
        <>
            <div dangerouslySetInnerHTML={createMarkup()} />;
        </>
    )
};

export default HtmlText;