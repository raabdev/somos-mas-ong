import React, {useEffect} from "react";
import ShortTestimonialsCard from "../../Testimonials/TestimonialsCard/ShortTestimonialsCard";
import {Box, Button } from "@chakra-ui/react";
import {Link} from "react-router-dom";
import SkeletonTestimonials from './SkeletonComponent';
import useFetch from '../../../../hooks/useFetch'
import {Title} from "components/public/SectionTitle/Title";


const TestimonialsSection = () => {
  const {loading, error, response, fetchData}=useFetch()

  useEffect(()=>{
    fetchData('http://ongapi.alkemy.org/api/testimonials')
        // eslint-disable-next-line
  },[]) 
 

  return (
    <Box
      background="linear-gradient(0deg, rgba(104,152,200,1) 0%, rgba(104,152,200,1) 50%, rgba(255,255,255,1) 50%)"
      h={{base:'100%', sm:'100%', md:'100vh', lg:'100vh'}}
      pt='30px'
      >
      <Title title={"Testimonios"} color={"#6898C8"} />

      <Box
        w='93%'
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-around"
        marginBottom="5%"
        mt={{md:'50px', lg:'50px'}}
        >
        <Button
          color="#8DCAFF"
          background="#FFFFFF"
          fontSize="1.5em"
          fontWeight="400"
          borderRadius="0"
          padding="30px"
          marginTop="10%"
          marginLeft="7.5%"
          marginRight="10%"
          boxShadow="0px 8px 15px rgba(0, 0, 0, 0.1)"
          mb='40px'
          >
          <Link to={"/testimonials"}>Ver todos</Link>
        </Button>
        
        { loading? <SkeletonTestimonials/> : error? <h1>Se produjo un error</h1> : response?.data.slice(0,3).map(testimonial => {
          return (
            <ShortTestimonialsCard
              name={testimonial.name}
              text={testimonial.description}
              img={testimonial.image}
              width={"200px"}
              height={"375px"}
              imgHeight={"200px"}
              imgWidth={"200px"}
              shorterText={true}
              key={testimonial.id}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
