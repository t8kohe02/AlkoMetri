import {StyleSheet} from 'react-native';


export const lightMode = StyleSheet.create({


    StyleSheet: {
        backgroundColor: 'pink',
        padding: 40,
    }, 

    title: {
        fontSize: 50,
        fontWeight: '500',
    },

    header: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 15,
        paddingBottom: 15,
        borderBottomColor: "purple",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    View: {

        alignItems: 'center',
    },

    textInput: {
        backgroundColor: 'white',
        textAlign: 'center',
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },

    label: {
        fontSize: 20,
        fontWeight: '300',
        marginTop: 10,
        marginBottom: 10,

    },

    result: {
        marginTop: 10,
        marginBottom: 10, 
    },
    
    Button: {
        marginTop: 10,
        marginBottom: 10, 
    },
    // radio: {
    //     outerColor: 'black',
    //     innerColor: 'black',
    // },
});


export const darkMode = StyleSheet.create({
    StyleSheet: {
        ...lightMode.StyleSheet,
        backgroundColor: 'grey',

    },
    
    title: {
        ...lightMode.title
    },


    header: {
        ...lightMode.header,
        borderBottomColor: "darkgrey",
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    View: {
        alignItems: 'center',
    },

    textInput: {
        ...lightMode.textInput,
    },

    label: {
        ...lightMode.label,

    },
    
    result: {
        ...lightMode.result,
    },
});