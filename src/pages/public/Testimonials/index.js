import React, {useEffect} from "react";
import TestimonialsCard from "../../../components/public/Testimonials/TestimonialsCard/TestimonialsCard";
import {Box} from "@chakra-ui/react";
import Loading from "../../../components/Loading";
import {showError} from "../../../services/Alert/alerts";
import {obtenerTestimoniosApi} from "../../../reducers/testimonialsReducer";
import {useDispatch, useSelector} from "react-redux";
import {Title} from "components/public/SectionTitle/Title/";
import { Center, Container, SimpleGrid } from "@chakra-ui/layout";
import "../About/styles.css"


const TestimonialsPage = () => {
  const dispatch = useDispatch();

  const {testimonios, loading, error} = useSelector(state => state.testimonios);

  useEffect(() => {
    dispatch(obtenerTestimoniosApi());
  }, [dispatch]);

  if (loading) {
    return <Container centerContent><Loading /></Container>
  }

  if (error?.messsage) {
    showError(
      "Problema de conexión",
      "Problema de conexión con el servidor, no se pudieron recuperar los datos"
    );
  }

  return (
    <Box bg='#fff'>

      <div className="div-background" style={{background: "linear-gradient(to left, #0000005b, #1213138a, #0f2027aa), url('https://images.unsplash.com/3/alejandroescamilla-book.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1947&q=80')"}}>           
        <div style={{width:"100%"}}>
          <h2>Testimonios</h2>       
          <div>
            <p>Palabras de quienes participan en nuestra organización, contando como ésta impactó en su desarrollo personal.</p>
          </div>
        </div>     
      </div>
      <Title title="Testimonios" />
      <Center marginBottom={20}>

      <SimpleGrid  columns={[1, 1, 2, 3, 3]} spacing="30px" mx={4}>

        {testimonios.map(testimonio => {
          return (
            <TestimonialsCard testimonial={testimonio}
            />
          );
        })}
      
      </SimpleGrid>
      </Center>

    </Box>
  );
};

export default TestimonialsPage;
