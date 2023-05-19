import React, { useState } from 'react'
import { Image, StyleSheet, FlatList, View, TextInput, TouchableOpacity, Text } from 'react-native'

import PostActions from './PostActions'
import PostImages from './PostImages'

function Feed({ item, navigation }){

const onPressViewComments = () => {}
const [valueComment1, onChangeComment1] = useState('')

function feedItem({ item }){
return (
<View style={styles.feed_item}>
<PostActions item={'post_actions' in item ? item.post_actions: item} navigation={navigation}/>
<PostImages item={'post_images' in item ? item.post_images: item} navigation={navigation}/>
<View style={{flexDirection: 'row'}}>
<Text style={styles.post_label} numberOfLines={1}>{item.post_label}</Text>
<Text style={styles.post_description}>{item.post_description}</Text>
</View>
<TouchableOpacity  onPress={onPressViewComments}>
    <View style={styles.view_comments}>{'View Comments'}</View>
</TouchableOpacity>
<Image
    style={styles.profile_image}
    source={{uri: item.profile_image}}
    />
<TextInput style={styles.comment1} value={valueComment1} onChangeText={onChangeComment1} placeholder={'Comment1'} />
</View>
)}

return (
<FlatList
    style={styles.feed}
    data={item}
    renderItem={feedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Feed;

const styles = StyleSheet.create({
    "post_label": {
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
    "post_description": {
        "fontSize": 12,
        "fontWeight": "250",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5,
        "color": "#0A3169",
        "margin": "2px",
        "padding": "1px",
        "fontFamily": "monospace"
    },
    "view_comments": {
        "flex": 1,
        "padding": "1px",
        "margin": "2px",
        "textAlign": "center",
        "backgroundColor": "#1ACDA5",
        "color": "white",
        "fontFamily": "monospace"
    },
    "profile_image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5,
        "backgroundColor": "#E1BA80",
        "margin": "2px",
        "padding": "1px",
        "fontFamily": "monospace"
    },
    "comment1": {
        "flex": 1,
        "fontSize": 15,
        "fontWeight": "400",
        "padding": "1px",
        "margin": "2px",
        "backgroundColor": "whitesmoke",
        "fontFamily": "monospace"
    }
});