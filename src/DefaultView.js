import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    contentstyle: {
        flex: 0.25,
        fontSize: 25,
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    textStyle: {
        textAlign: 'center',
        alignItems: 'center',
        color: 'white',
    },
});

export default function DefaultView({title, color, textColor}) {
    console.log(color);
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
