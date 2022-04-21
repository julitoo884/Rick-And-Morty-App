import React from "react";
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom' 
import ErrorPage from "../../components/error";
import errorimage from '../../assets/connection.png'
import LoadingSpinner from "../../components/loading";

import { ContainerVerticalAlign } from "../../components/contentnotfound";
import HorizontalCard from "../../components/horizontalcard";



import GET_INDIVIDUAL_DATA from "../../graphql/individualdata.graphql";


function Character() { 

  const { id }  = useParams()

  const { data, error, loading } = useQuery(GET_INDIVIDUAL_DATA, {
    variables: { id },
  })

  if (error) {
    return (
      <ErrorPage 
        titlecolor="#F44E3B" 
        title='UUPS!' 
        content="an internet connection could not be established"
        image={errorimage}
      />
    )
  }

  
  return loading ? <LoadingSpinner/> : (
    <ContainerVerticalAlign>
      <HorizontalCard
        data={data.character}
      />
    </ContainerVerticalAlign>
  ); 
}

export default Character;  