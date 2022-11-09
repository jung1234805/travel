import React, { useState,useRef } from 'react';
import { TouchableWithoutFeedback,Keyboard } from 'react-native';
import styled from 'styled-components/native';
import { Input } from '../components';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text, View, Image } from 'react-native';

import survey from '../images/survey.png';
import registration from '../images/registration.png';
import analysis from '../images/analysis.png';
import passport from '../images/passport.png';

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;

const Guide = ({navigation}) => {

    return (
        <KeyboardAwareScrollView 
            contentContainerStyle = {{flex : 1}}
            extraScrollHeight = {20}
        >
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
        <Container>
            <View>
              <Text>이용가이드</Text>
              <Text><br/>
                  1. 질문을 통해 나의 여행 취향과 이번 여행에 바라는 점을 알려주세요.</Text>
              <Image src={survey} style={{width:"100px"}}/>
              <Text>2. 회원가입을 해주세요.</Text>
              <Image src={registration} style={{width:"100px"}}/>
              <Text>3. 여행일정을 추천 받아요.</Text>
              <Image src={analysis} style={{width:"100px"}}/>
              <Text>4. 나만의 여행일정과 함께 바로 여행 출발!</Text>
              <Image src={passport} style={{width:"100px"}}/>
              </View>
            <View style={{ flexDirection:"row" }} >
              <Button title = "Home" 
            onPress = {() => navigation.navigate('MainPage')} />
              <Button title = "Schedule" 
            onPress = {() => navigation.navigate('Schedule')} />
             <Button title = "My" 
            onPress = {() => navigation.navigate('MyPage')} />
              </View>
                      </Container>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
};


export default Guide