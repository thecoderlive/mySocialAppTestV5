import React, { useState } from 'react'
import { Image, StyleSheet, FlatList, View, Text } from 'react-native'



function Stories({ item, navigation }){



function storiesItem({ item }){
return (
<View style={styles.stories_item}>
<Image
    style={styles.story}
    source={{uri: item.story}}
    />
<Text style={styles.story_label} numberOfLines={1}>{item.story_label}</Text>
</View>
)}

return (
<FlatList
    horizontal={true}
    style={styles.stories}
    data={item}
    renderItem={storiesItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
)}

export default Stories;

const styles = StyleSheet.create({
    "story": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5,
        "backgroundColor": "#E1BA80",
        "margin": "2px",
        "padding": "1px",
        "fontFamily": "monospace"
    },
    "story_label": {
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
    }
});