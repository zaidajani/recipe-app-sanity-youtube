import styled from "styled-components/native";
import { ScrollView, Image } from "react-native";

export const Container = styled.View`
  padding: 16px;
`;

export const CatText = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export const Spacer = styled.View`
  padding: 10px;
`;

export const Scroll = styled(ScrollView)`
  height: 92%;
`;

export const DetailScroll = styled(ScrollView)`
  height: 100%;
`;

export const ArrowHolder = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 250px;
  border-radius: 30px;
`;

export const CatHolder = styled.Text`
  color: #002d4b;
  font-weight: 600;
  font-size: 22px;
`;

export const IngredientHolder = styled.View`
  height: 60px;
  width: 100%;
  border-radius: 20px;
  background-color: #e3e3e3
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

export const Ingredient = styled.Text`
  color: black;
  font-size: 15px;
  margin-left: 10px;
  font-weight: 500;
`;

export const SpacerLess = styled.View`
  padding: 6px;
`;

export const DescriptionButton = styled.View`
  padding: 20px;
  height: 60px;
  background-color: #4db065;
  border-radius: 10px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DescriptionButtonHolder = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 17px;
`;