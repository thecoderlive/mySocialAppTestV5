import React, { useState, useEffect, useReducer } from 'react'
import { ActivityIndicator, StyleSheet, ScrollView, View } from 'react-native'

import { actionCreators, initialState, reducer } from './reducer'
import { api } from './api'
import { data } from './data'
import * as items from './home_data'
import Stories from './Stories'
import Feed from './Feed'

function Home({ navigation, route }){ 
const url = (api.home ?? "home/") + (route?.params?.id ?? '')
const [state, dispatch] = useReducer(reducer, initialState)

const { item, history, loading, error } = state



async function getItem() {
      dispatch(actionCreators.loading())

      try {
        if (url in history){
           dispatch(actionCreators.local(history[url]))
        } else if (url.indexOf('http') > -1){
          const response = await fetch(url)
          const json = await response.json()
          if(json){
            dispatch(actionCreators.success(route.params?.id ? json : json[0], url))
          }   
        } else {
          const json = route.params?.id ? data[route.params?.id] : items.item
          dispatch(actionCreators.success(json, url))
        }
      } catch (e) {
        dispatch(actionCreators.failure())
      }
    }

useEffect(() => {
    getItem();
}, []);
  
if (loading) {
    return (
        <View style={styles.center}>
        <ActivityIndicator animating={true} />
        </View>
    )
}

return(
<ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
<Stories item={'stories' in item ? item.stories: item} navigation={navigation}/>
<Feed item={'feed' in item ? item.feed: item} navigation={navigation}/>
</ScrollView>
)}

export default Home;

const styles = StyleSheet.create({
    "center": {
        "flex": 1,
        "justifyContent": "center",
        "alignItems": "center",
        "margin": "2px",
        "padding": "1px",
        "fontFamily": "monospace"
    }
});