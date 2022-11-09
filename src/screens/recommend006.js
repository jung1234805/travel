import React from 'react';
import styled from 'styled-components/native';
import JmButton from '../components/JmButton';

const Container=styled.View`
    flex:1;
    background-color: #ffffff;
`;

const StyledText=styled.Text`
    font-size: 18px;
    margin-top: 50px;
    color : #5B8F89;
    font-weight : 600;
    margin-left : 20px;
`;

const Container1=styled.View`
    margin-top:10px;
    width: 100%;
    flex:3;
    background-color:#ffffff;
`;

const recommend006=({navigation, route})=>{
    ID=route.params.ID;
    var I=String(ID);
    const Result=()=>{
        if (I==[0,0,0,0]){
           navigation.navigate('Destination0');
      } else if (I==[1,0,1,1]){
            navigation.navigate('Destination1');
      } else if (I==[1,0,0,1]){
            navigation.navigate('Destination2');
      } else if (I==[1,1,0,1]){
            navigation.navigate('Destination3');
      } else if (I==[1,0,0,0]){
            navigation.navigate('Destination4');
      } else if (I==[0,1,1,0]){
            navigation.navigate('Destination5');
      } else if (I==[1,1,1,0]){
            navigation.navigate('Destination6');
      } else if (I==[0,1,1,1]){
            navigation.navigate('Destination7');
      } else if (I==[0,1,0,0]){
            navigation.navigate('Destination8');
      } else if (I==[1,1,0,0]){
            navigation.navigate('Destination9');
      } else if (I==[0,1,0,1]){
            navigation.navigate('Destination10');
      } else if (I==[1,1,1,1]){
            navigation.navigate('Destination11');
      } else if (I==[1,0,1,0]){
            navigation.navigate('Destination12');
      } else if (I==[0,0,0,1]){
            navigation.navigate('Destination13');
      } else if (I==[0,0,1,0]){
            navigation.navigate('Destination14');
      } else {navigation.navigate('Destination15');
    }

    };

    return(
        <Container>
        <Container1>
            <JmButton styled={{width:'100%'}} title="결과" onPress={Result}/>
        </Container1>
    </Container>
    );
}

export default recommend006;