import React from 'react';
import { TouchableWithoutFeedback,Keyboard } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text, View} from 'react-native';

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;

const MyPage = ({navigation}) => {
    
    return (
        <KeyboardAwareScrollView 
            contentContainerStyle = {{flex : 1}}
            extraScrollHeight = {20}
        >
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
        <Container>
            <View style >
              <Button title = "로그인" onPress = {() => navigation.navigate('Signin')} />
              <Button title = "이용 가이드" onPress = {() => navigation.navigate('Schedule')} />
              <Button title = "나의 여행" onPress = {() => navigation.navigate('MyPage')} />
            </View>
        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
};


export default MyPage