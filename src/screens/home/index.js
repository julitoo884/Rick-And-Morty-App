import React , { useEffect } from "react";
import { useQuery } from '@apollo/client'
import GET_DATA from "../../graphql/initialData.graphql";
import { ContainetCards } from "../../components/containercards";
import StyledCardComponent from '../../components/card'
import { useSelector , connect } from "react-redux";
import ErrorPage from "../../components/error";
import errorimage from '../../assets/connection.png'
import LoadingSpinner from '../../components/loading'
import MainTitleSection from "../../components/maintitlesection";

import { lengthCharactersChange } from "../../redux/actions/changelenghtcharacters";


function Home({ setlength }) {  

  const { color } = useSelector(data => data.color)   
  const { data, error, loading } = useQuery(GET_DATA) 

  useEffect(() => {
    if (data) {
      setlength(data.characters.results.length);
    } else if (error) {
      setlength(0)
    }
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
    <div>
      <MainTitleSection title="Rick And Morty App" subtitle="Development by Julio Rangel" />
      <ContainetCards bg={color} role="Container cards"> 
        {data.characters.results.map((character , i) => 
          <StyledCardComponent
            key={character.id}
            data={character}
            index={i}
          />
        )}
      </ContainetCards>
    </div>
  );
}  

const mapStateToProps = (state)=> {
  return {
      length : state.characters.length,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
      setlength: (number) => {dispatch(lengthCharactersChange(number))},
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home); 