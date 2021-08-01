import {Container} from "@chakra-ui/layout";
import {useMediaQuery} from "@chakra-ui/react";
import {customSizes, formatDate} from "./const";
import NoveltyCard from "./NoveltyCard";
import Loading from "components/Loading";
import React, {useEffect} from "react";
import {showError} from "../../../services/Alert/alerts";
import styled from "@emotion/styled";
import { lengthText } from "utils/lengthText";
import { obtenerNoticiasApi } from '../../../reducers/newsReducer';
import { useDispatch, useSelector } from 'react-redux';


export const Novelties = () => {
  const [isSmallerThan1280] = useMediaQuery("(max-width: 1280px)");
  const query = isSmallerThan1280; 
  const dispatch = useDispatch()

  const { news, loading, error } = useSelector( state => state.newsReducer );

  useEffect(() => {

    dispatch(obtenerNoticiasApi());
    
}, [dispatch])

  if (loading)
    return (
      <Container centerContent>
        <Loading />
      </Container>
    );

  if (error?.messsage) {
    showError(
      "Problema de conexión",
      "Problema de conexión con el servidor, no se pudieron recuperar los datos"
    );
  }

  return (
    <>

      <NoveltiesContainer>
        {news?.length > 0 ? (
          news
            ?.slice(0, 5)
            .map((nov, index) => (
              <NoveltyCard
                key={nov.id}
                id={nov.id}
                titleCard={nov.name}
                imgCard={nov.image}
                descriptionCard={formatDate(nov.created_at)}
                content={lengthText(nov.content,333)}
                widthCard={customSizes(index, "widthCard", query)}
                flexD={customSizes(index, "flexD", query)}
                widthImg={customSizes(index, "widthImg", query)}
                heightImg={customSizes(index, "height", query)}
                fontSize={customSizes(index, "fontSize", query)}
                linkDetails={`/novelties/${nov.id}`}
                marginTopImg={customSizes(index, "marginTopImg", query)}
                
              />
            ))
        ) : error ? (
          <Container centerContent>
            <p>{error}</p>
          </Container>
        ) : (
          <Container centerContent>
            <p>No se encontraron resultados</p>
          </Container>
        )}
      </NoveltiesContainer>
    </>
  );
};

const NoveltiesContainer = styled.div`
  margin: auto;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
document.body.style = "background: #F7F7F7;";
