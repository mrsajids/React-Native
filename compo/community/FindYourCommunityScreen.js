import { ScrollView, StyleSheet, View } from 'react-native'
import * as React from 'react';
import { Avatar, Button, Card, MD3Colors, ProgressBar, Text } from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const FindYourCommunityScreen = ({ navigation, route, options }) => {
    React.useEffect(() => console.log(navigation, route, options), [])

    return (
        <ScrollView style={styles.conmmunityContainer}>
            <Card style={{ margin: 5, padding: 10, borderRadius: 0 }}>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{ marginBottom: 4 }}>Profile Completion (50%)</Text>
                    <View><Entypo name="cross" size={20} /></View>
                </View>

                <ProgressBar progress={0.5} color={MD3Colors.primary20} />
            </Card>
            {
                [1, 2, 4, 5, 5, 5].map((i, ind) => (
                    <Card type="" key={ind} style={{ margin: 5 }}>
                        <Card.Cover style={styles.cardImage} source={{ uri: 'https://picsum.photos/80'.concat(ind) }} />
                        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
                        <Card.Content style={styles.cardContent}>
                            <Text variant="titleLarge" style={styles.title}>Name</Text>
                            <Text variant="bodyMedium" style={styles.profession}><FontAwesome name="graduation-cap" size={18} />{' '}Profession</Text>
                            <Text variant="bodyMedium" style={styles.location}><EvilIcons name="location" size={21} />{' '}Location</Text>
                            <Text variant="bodySmall" style={styles.skill}>skill not mentioned</Text>
                            <Text variant="bodyMedium" style={styles.experience}><Entypo name="suitcase" size={18} />{' '}Experience</Text>
                            <Card.Actions style={styles.cardAction}>
                                <Button mode='outlined' style={styles.buttons}><Entypo name="eye" size={20} /></Button>
                                <Button mode='outlined' style={styles.buttons}><Ionicons name="chatbubble-sharp" size={20} /></Button>
                                <Button mode='outlined' style={styles.buttons}><FontAwesome name="handshake-o" size={20} /></Button>
                            </Card.Actions>
                        </Card.Content>
                    </Card>
                ))
            }

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    conmmunityContainer: { padding: 12 },
    title: {
        color: 'rgb(13, 110, 253)',
        margin: 5
    },
    cardContent: {
        flex: 1, alignContent: 'center', alignItems: 'center'
    },
    cardAction: {
        flex: 3, alignContent: 'center', alignItems: 'center'
    },
    skill: {
        color: 'rgb(13, 110, 253)',
    },
    cardImage: {
        borderRadius: 5
    },
    buttons: {
        borderRadius: 10,
    }
});
export default FindYourCommunityScreen