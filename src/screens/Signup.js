import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components/native';
import { Button, Input } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../utils/common';
import { Alert } from 'react-native';
import { signup } from '../utils/connection';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 40px 20px;
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width : 100%;
  height : 20px;
  margin-bottom : 10px;
  line-height: 20px;
  color : ${({ theme }) => theme.errorText};
`;

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const didMountRef = useRef();

  const _handleSignupButtonPress = async () => {
    try {
      const user = await signup ({ email, password });
      console.log(user);
      Alert.alert('Signup Success', user.email);
    } catch(e) {
      Alert.alert('Signup Error', e.message);
    }
  };

  useEffect(() => {
    if(didMountRef.current){
      let _errorMessage = '';
      if(!name) {
        _errorMessage = '이름을 입력해주세요';
      } else if(!validateEmail(email)){
        _errorMessage = '이메일을 확인해주세요';
      } else if(password.length < 6){
        _errorMessage = '비밀번호는 최소한 6자리 이상이여야 합니다';
      } else if(password !== passwordConfirm){
        _errorMessage = '비밀번호가 일치하지 않습니다';
      } else {
        _errorMessage = '';
      }
      setErrorMessage(_errorMessage);
    } else{
      didMountRef.current = true;
    }
  }, [name, email, password, passwordConfirm]);

  useEffect(() => {
    setDisabled(
      !(name && email && password && passwordConfirm && !errorMessage)
    );
  }, [name, email, password, passwordConfirm, errorMessage]);


  return (
    <KeyboardAwareScrollView 
        contentContainerStyle = {{ flex : 1}}
        extraScrollHeight={20}>
      <Container>
        <Input
          label="이름"
          placeholder="이름을 입력하세요"
          returnKeyType="next"
          value={name}
          onChangeText={text => setName(text)}
          onSubmitEditing={() => {
            setName(name.trim());
            emailRef.current.focus();
          }}
          onBlur={() => setName(name.trim())}
          maxLength={12}
        />
        <Input
          ref={emailRef}
          label="이메일"
          placeholder="이메일을 입력하세요"
          returnKeyType="next"
          value={email}
          onChangeText={text => setEmail(removeWhitespace(text))}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          ref={passwordRef}
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          returnKeyType="next"
          value={password}
          onChangeText={text => setPassword(removeWhitespace(text))}
          isPassword={true}
          onSubmitEditing={() => passwordConfirmRef.current.focus()}
        />
        <Input
          ref={passwordConfirmRef}
          label="비밀번호 확인"
          placeholder="비밀번호를 한번 더 입력하세요"
          returnKeyType="done"
          value={passwordConfirm}
          onChangeText={text => setPasswordConfirm(removeWhitespace(text))}
          onSubmitEditing = {_handleSignupButtonPress}
          isPassword={true}
        />
        <ErrorText>{errorMessage}</ErrorText>
        <Button
          title="회원가입"
          disabled={disabled}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Signup;