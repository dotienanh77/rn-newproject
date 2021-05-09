import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    textStyle: {
        flex: 0.25,
        textAlign: 'center',
        backgroundColor: 'green',
        fontSize: 25,
        justifyContent: 'center',
        // alignItems: 'center',
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
        <Text style={[styles.textStyle, customStyle, {color: textColor}]}>
            {title}
        </Text>
    );
}
