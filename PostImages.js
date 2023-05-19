import React, { useState } from 'react'
import { Image, StyleSheet, FlatList, View } from 'react-native'



function PostImages({ item, navigation }){



function postImagesItem({ item }){
return (
<View style={styles.post_images_item}>
<Image
    style={styles.post}
    source={{uri: item.post}}
    />
<View style={{flexDirection: 'row'}}>
{<View
    style={[styles.like,{ backgroundColor: item.like ? 'red' : 'black' }]}
   />}
{<View
    style={[styles.comment,{ backgroundColor: item.comment ? 'red' : 'black' }]}
   />}
{<View
    style={[styles.share,{ backgroundColor: item.share ? 'red' : 'black' }]}
   />}
{<View
    style={[styles.save,{ backgroundColor: item.save ? 'red' : 'black' }]}
   />}
</View>
</View>
)}

return (
<FlatList
    horizontal={true}
    style={styles.post_images}
    data={item}
    renderItem={postImagesItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
)}

export default PostImages;

const styles = StyleSheet.create({
    "post": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5,
        "backgroundColor": "#E1BA80",
        "margin": "2px",
        "padding": "1px",
        "fontFamily": "monospace"
    },
    "like": {
        "width": 30,
        "height": 30,
        "borderRadius": 20,
        "marginTop": 5,
        "backgroundColor": "#E1BA80",
        "margin": "2px",
        "padding": "1px",
        "fontFamily": "monospace"
    },
    "comment": {
        "width": 30,
        "height": 30,
        "borderRadius": 20,
        "marginTop": 5,
        "backgroundColor": "#E1BA80",
        "margin": "2px",
        "padding": "1px",
        "fontFamily": "monospace"
    },
    "share": {
        "width": 30,
        "height": 30,
        "borderRadius": 20,
        "marginTop": 5,
        "backgroundColor": "#E1BA80",
        "margin": "2px",
        "padding": "1px",
        "fontFamily": "monospace"
    },
    "save": {
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