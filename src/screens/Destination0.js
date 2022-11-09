import React ,{useState, useCallback}from 'react';
import { TouchableWithoutFeedback,Keyboard, Text, View, StyleSheet, Image,ScrollView,Share,RefreshControl } from 'react-native';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import JmButton from '../components/JmButton';


const Destination0 = ({navigation}) => {
  const styles = StyleSheet.create({
    common: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    scrollView:{
        padding: 30,
        backgroundColor: 'white',
        alignContent:'center',
        alignItems:'center',
    }
  });

  const StyledView=styled.View`
    justify-content: space-around;
    flex-direction: row;
    margin:20px;
    margin-top: 20px;
    padding: 30px;
  `;

  const StyledText=styled.Text`
    font-size: 18px;
    margin-top: 2px;
    color : #5B8F89;
    font-weight : 600;
    margin-left : 20px;
    margin-bottom: 30px;
`;

const LastText=styled.Text`
font-size: 28px;
margin-top: 20px;
color : #5B8F89;
font-weight : 600;
margin-left : 20px;
margin-bottom: 50px;
`;

const share = () => {
    Share.share({
        message:`${tip.title}  ${tip.desc} ${tip.image}`,
    });
}

const [refreshing, setRefreshing] = useState(false);

const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, [])

const tip={title:'국내 여행지 추천', desc:'도심 속에서의 휴식, 강남', image:'../images/강남.jpg'}

    return (
        <KeyboardAwareScrollView 
            contentContainerStyle = {styles.View}
            extraScrollHeight = {20}
        >
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
            <View style={styles.common}>
              <StyledText>도심 속에서의 휴식, 강남</StyledText>
              <Image source ={require('../images/강남.jpg')}  style = {{width: 300, height:300}}/>
              <StyledView contentContainerStyle={styles.scrollView}
                           refreshControl = {<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <JmButton title='다시 하기' onPress={()=>navigation.popToTop()}></JmButton>
                <JmButton title='공유 하기' onPress={()=>share()}></JmButton>
              </StyledView>
              <ScrollView style={styles.scrollview}>
                <LastText>추천 여행지</LastText>
                <Image source ={require('../images/강남관광정보센터.jpg')}  style = {{width: 300, height:300}}/>
                <JmButton title='강남관광정보센터' onPress={()=>navigation.navigate('강남관광정보센터')}></JmButton>
                <LastText></LastText>
                <Image source ={require('../images/강남봉은사.jpg')}  style = {{width: 300, height:300}}/>
                <JmButton title='봉은사' onPress={()=>navigation.navigate('봉은사')}></JmButton>
                <LastText></LastText>
                <Image source ={require('../images/강남코엑스.jpg')}  style = {{width: 300, height:300}}/>
                <JmButton title='코엑스' onPress={()=>navigation.navigate('코엑스')}></JmButton>
            </ScrollView>
            </View>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
};


export default Destination0