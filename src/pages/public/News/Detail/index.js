import React from 'react';
import { Box } from '@chakra-ui/layout';
// import ImageTitle from 'components/public/News/ImageTitle';
import NewsDetailView from 'components/public/News/NewsDetailView';

const NewsDetail = () => {
    return (
        <Box>
            {/* <ImageTitle title='Titulo Number One' image={'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'} /> */}
            <NewsDetailView />
        </Box>
    );
};

export default NewsDetail;
