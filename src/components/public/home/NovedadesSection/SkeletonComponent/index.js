import React from 'react'
import {SkeletonCircle} from '@chakra-ui/react'
const SkeletonComponent = () => {
  return (
    <>
      <SkeletonCircle width="150px" h='150px' my='20px' />
      <SkeletonCircle width="150px" h='150px' my='20px'/>
      <SkeletonCircle width="150px" h='150px' my='20px'/>
    </>
  )
}

export default SkeletonComponent
