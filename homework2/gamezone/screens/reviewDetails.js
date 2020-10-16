import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';

import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ route.params.id }</Text>
                <Text>{ route.params.email }</Text>
                <Text>{ route.params.namne }</Text>
            </Card>
        </View>
    );
}