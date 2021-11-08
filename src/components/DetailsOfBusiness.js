import React from "react";
import {Image, View, StyleSheet, Text} from "react-native";

const DetailsOfBusiness = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: props.photos}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        borderRadius: 4,
        marginBottom: 5,
        margin: 10,
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    }
});

export default DetailsOfBusiness;