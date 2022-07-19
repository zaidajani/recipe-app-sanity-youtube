import React from "react";
import { Card } from "react-native-paper";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Infocard = styled(Card)`
  background-color: white;
  border-radius: 12px;
  display: flex;
`;

const InfoCardCover = styled(Card.Cover)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const Info = styled.View`
  padding: 16px
`;

const Title = styled.Text`
  font-size: 17px;
  text-align: center;
`;

export const CardComp = ({ imageUrl, title }) => {
  return (
    <Infocard>
      <View>
        <InfoCardCover 
          key="food"
          source={{
            uri: imageUrl
          }}
        />
      </View>
      <Info>
        <Title>{title}</Title>
      </Info>
    </Infocard>
  )
}