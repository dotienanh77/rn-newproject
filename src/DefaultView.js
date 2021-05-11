import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    contentstyle: {
        flex: 1,
        fontSize: 25,
        justifyContent: 'center',
        backgroundColor: 'green',
        alignItems: 'center',
    },
    textStyle: {
        //textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default function DefaultView({title, color, textColor}) {
    //console.log(color);
    let customStyle;
    if (color) {
        customStyle = {backgroundColor: color};
    }
    return (
        <View style={[styles.contentstyle, customStyle]}>
            <Text style={[styles.textStyle, {color: textColor}]}>{title}</Text>
        </View>
    );
}
