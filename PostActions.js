import React, { useState } from 'react'
import { Image, StyleSheet, FlatList, View, Text } from 'react-native'



function PostActions({ item, navigation }){



function postActionsItem({ item }){
return (
<View style={styles.post_actions_item}>
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
{<View
    style={[styles.menu,{ backgroundColor: item.menu ? 'red' : 'black' }]}
   />}
</View>
</View>
)}

return (
<FlatList
    horizontal={true}
    style={styles.post_actions}
    data={item}
    renderItem={postActionsItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
)}

export default PostActions;

const styles = StyleSheet.create({
    "user_image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5,
        "backgroundColor": "#E1BA80",
        "margin": "2px",
        "padding": "1px",
        "fontFamily": "monospace"
    },
    "user_name": {
        "flex": 1,
        "color": "#B98B22",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5,
        "margin": "2px",
        "padding": "1px",
        "fontFamily": "monospace"
    },
    "menu": {
        "width": 30,
        "height": 30,
        "borderRadius": 20,
        "marginTop": 5,
        "backgroundColor": "#E1BA80",
        "margin": "2px",
        "padding": "1px",
        "fontFamily": "monospace"
    }
});