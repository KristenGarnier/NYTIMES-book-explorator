import React, {StyleSheet, Text, View, Component} from 'react-native';
import Switch from './switch';

class CrossPlatform extends Component{
    constructor(){
        super();
        this._onValueChange = this._onValueChange.bind(this);

        this.state = {
            val: false
        };
    }

    _onValueChange(val){
        this.setState({
            val: val
        });
    }

    render(){
        const colorClass = this.state.val ? styles.blueContainer : styles.redContainer;
        return (
            <View style={[styles.container, colorClass]}>
                <Text style={styles.welcome}>
                    Make me blue !
                </Text>
                <Switch  onValueChange={this._onValueChange}/>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blueContainer: {
        backgroundColor: '#5555FF'
    },
    redContainer: {
        backgroundColor: '#FF5555'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
})

export default CrossPlatform;
