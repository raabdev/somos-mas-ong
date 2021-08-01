import React from "react"
import ContentLoader from "react-content-loader"

const PlaceHolder = (props) => (
    <ContentLoader viewBox="0 0 400 475" height={475} width={400} {...props}>
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="40%" />
        <rect x="100" y="44%" rx="5" ry="5" width="50%" height="20" />
        <rect x="0" y="55%" rx="5" ry="5" width="100%" height="10" />
        <rect x="8" y="63%" rx="5" ry="5" width="95%" height="10" />
        <rect x="13" y="71%" rx="5" ry="5" width="90%" height="10" />
        <rect x="18" y="79%" rx="5" ry="5" width="85%" height="10" />
        <rect x="23" y="87%" rx="5" ry="5" width="80%" height="10" />
    </ContentLoader>
)

export default PlaceHolder

