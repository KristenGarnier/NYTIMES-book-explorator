'use strict';

import React, {
    Text,
    ListView,
    Component,
    StyleSheet,
    View
} from 'react-native';

import BookItem from './components/bookitem';

const API_KEY = '73b19491b83909c7e07016f4bb4644f9:2:60667290',
    QUERY_TYPE = 'hardcover-fiction',
    API_STEM = 'http://api.nytimes.com/svc/books/v3/lists',
    ENDPOINT = `${API_STEM}/${QUERY_TYPE}?response-format=json&api-key=${API_KEY}`;

class Exploring extends Component {
    constructor() {
        super();

        this._refreshData = this._refreshData.bind(this);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows([])
        }
    }

    componentDidMount() {
        this._refreshData();
    }

    _renderRows(rowData) {
        return <BookItem
            coverURL={rowData.book_image}
            title={rowData.title}
            author={rowData.author}
        />
    }

    _renderHeader() {
        return <View style={styles.sectionDivider}>
            <Text style={styles.headingText}>
                Best seller in Hardcover Fiction
            </Text>
        </View>
    }

    _renderFooter() {
        return <View style={styles.sectionDivider}>
            <Text>
                Data from the new york times best seller list.
            </Text>
        </View>
    }


    _refreshData() {
        console.log(ENDPOINT);
        fetch(ENDPOINT)
            .then(res => res.json())
            .then(rjson => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(rjson.results.books)
                })
            })
            .catch(err => {
                console.error(`ERROR : ${err}`)
            })
    }

    render() {
        return <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRows}
            renderHeader={this._renderHeader}
            renderFooter={this._renderFooter}
        />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingTop: 24
    },
    list: {
        flex: 1,
        flexDirection: 'row'
    },
    listContent: {
        flex: 1,
        flexDirection: 'column'
    },
    row: {
        flex: 1,
        fontSize: 24,
        padding: 42,
        borderWidth: 1,
        borderColor: '#DDDDDD'
    },
    sectionDivider: {
        padding: 8,
        backgroundColor: '#EEEEEE',
        alignItems: 'center'
    },
    headingText: {
        flex: 1,
        fontSize: 24,
        alignSelf: 'center'
    }
});

export default Exploring;
