import React, { useState,useRef } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import styled from 'styled-components/native';
import { Input } from '../components';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../utils/common';
import { Alert } from 'react-native';
import { login } from '../utils/connection';


const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;

const ErrorText = styled.Text`
    align-items : flex-start;
    width : 100%;
    height : 20px;
    margin-bottom : 10px;
    line-height : 20px;
    color : ${({ theme})=> theme.errorText};
`;

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef();
    const [errorMessage, setErrorMessage] =useState('');
    
    const _handleLoginButtonPress = async() => {
        try {
            const user = await login({ email, password });
            Alert.alert('로그인 성공', user.email);
            navigation.navigate('MainPage');
        } catch(e){
            Alert.alert('로그인 에러', e.message);
        }
    };

    const _handleEmailChange = email => {
        const changedEmail = removeWhitespace(email);
        setEmail(changedEmail);
        setErrorMessage(
            validateEmail(changedEmail) ? '' : '이메일을 확인해주세요'
        );
    };
    
    const _handlePasswordChange = password => {
        setPassword(removeWhitespace(password));
    };


    return (
        <KeyboardAwareScrollView 
            contentContainerStyle = {{flex : 1}}
            extraScrollHeight = {20}
        >
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
    
        <Container>
            <Input 
            label = "이메일"
            value = {email}
            onChangeText = {_handleEmailChange}
            onSubmitEditing = {_handleLoginButtonPress}
            placeholder = "이메일을 입력하세요"
            returnKeyType = "next"
            />
            <Input
            ref = {passwordRef}
            label = "비밀번호"
            value = {password}
            onChangeText = {_handlePasswordChange}
            onSubmitEditing = {_handleLoginButtonPress}
            placeholder = "비밀번호를 입력하세요"
            returnKeyType = "done"
            isPassword
            />
            <ErrorText>{errorMessage}</ErrorText>
            <Button title = "로그인" onPress = {_handleLoginButtonPress} />
            <Button title = "회원가입을 원하시면 선택하세요" onPress = {() => navigation.navigate('Signup')} isFilled = {false}/>
        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
};

export default Login;