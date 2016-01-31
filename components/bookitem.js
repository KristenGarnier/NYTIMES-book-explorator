import React, {
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';

const styles = StyleSheet.create({
    bookItem: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#AAAAAA',
        borderBottomWidth: 2,
        padding: 5
    },
    cover: {
        flex: 1,
        height: 150,
        resizeMode: 'contain'
    },
    info: {
        flex: 3,
        alignItems: 'flex-end',
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 20
    },
    author: {
        fontSize: 18
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

const BookItem = ({author, title, coverURL}) => {
    return <View style={styles.bookItem}>
        <Image style={styles.cover} source={{uri: coverURL}}/>
        <View style={styles.info}>
            <Text style={styles.author}>
                {author}
            </Text>
            <Text>
                {title}
            </Text>
        </View>
    </View>
};

export default BookItem;
