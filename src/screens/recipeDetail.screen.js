import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { Container } from "./style/styles.style";
import {
  ArrowHolder,
  StyledImage,
  CatHolder,
  Spacer,
  IngredientHolder,
  Ingredient,
  SpacerLess,
  DescriptionButton,
  DetailScroll,
  DescriptionButtonHolder,
  ButtonText,
} from "./style/styles.style";
import { Ionicons } from "expo-vector-icons";

export const DetailScreen = ({ navigation, route }) => {
  const [description, setDescription] = useState(false);

  const {
    uri,
    ingredients,
    steps
  } = route.params;

  return (
    <SafeAreaView>
      <DetailScroll>
        <ArrowHolder>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="md-arrow-down" size="30" color="grey" />
          </TouchableOpacity>
        </ArrowHolder>
        <Container>
          <StyledImage
            source={{
              uri: uri
            }}
          />
          <Spacer />
          {description ? (
            <CatHolder>Steps</CatHolder>
          ) : (
            <CatHolder>Ingredients ({ingredients.length})</CatHolder>
          )}
          <SpacerLess />
          {description ? (
            <Text>{steps}</Text>
          ) : (
            <>
              {
                ingredients.map((ingredient) => {
                  return (
                    <>
                      <IngredientHolder>
                        <Ingredient>{ingredient}</Ingredient>
                      </IngredientHolder>
                      <SpacerLess />
                    </> 
                  )
                })
              }           
            </>
          )}
          <SpacerLess />
          <DescriptionButtonHolder>
            <TouchableOpacity onPress={() => {
              setDescription(!description);
            }}>
              <DescriptionButton>
                <ButtonText>Steps</ButtonText>
              </DescriptionButton>
            </TouchableOpacity>
          </DescriptionButtonHolder>
        </Container>
      </DetailScroll>
    </SafeAreaView>
  );
};
