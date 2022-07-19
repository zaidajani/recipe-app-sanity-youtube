import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { Search } from "../components/search.component";
import { TopDishesCard } from "../components/topDishes.component";
import { CardComp } from "../components/card.component";
import { client } from "./../lib/client";
import { urlFor } from "./../lib/client";
import { 
  Container,
  CatText,
  Spacer,
  Scroll
} from "./style/styles.style";

export const HomeScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(async () => {
    const query = '*[_type == "recipes"]';
    const recipes = await client.fetch(query);

    setRecipes(recipes);
  })

  return (
    <SafeAreaView>
      <Container>
        <Search placeholder="Search recipes" />
        <Spacer />
        <Scroll>
        <CatText>Latest Dishes</CatText>
        <Spacer />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
        {
          recipes.map((recipe, index) => {;
            if (index == 10) {
              return
            }

            return (
              <>
                <TouchableOpacity onPress={() => {
                  navigation.navigate("detail", {
                    uri: urlFor(recipe.image).url(),
                    ingredients: recipe.ingridients,
                    steps: recipe.steps
                  });
                }}>
                  <TopDishesCard title={recipe.title} image={urlFor(recipe.image).url()} />
                </TouchableOpacity>
                <Spacer />
              </>
            )
          })
        }
        </ScrollView>
        <Spacer />
        {
          recipes.map(recipe => {
            return (
              <>
                <TouchableOpacity onPress={() => {
                  navigation.navigate("detail", {
                    uri: urlFor(recipe.image).url(),
                    ingredients: recipe.ingridients,
                    steps: recipe.steps
                  });
                }}>
                  <CardComp title={recipe.title} imageUrl={urlFor(recipe.image).url()} />
                </TouchableOpacity>
                <Spacer />
              </>
            )
          })
        }
        <Spacer />
        <Spacer />
        </Scroll>
      </Container>
    </SafeAreaView>
  )
}