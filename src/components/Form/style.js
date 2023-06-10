import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContext: {
      width: "100%",
      height: "100%",
      bottom: 0,
      backgroundColor: "#ffffff",
      alignItems: "center",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      marginTop: 10,
      
    },
    form:{
      //flexDirection: "row",
      width: "100%",
      height: "auto",
      marginTop: 5,
    },
    formWh: {
      width: "100%",
      height: "auto",
      marginTop: 5,
      paddingLeft: 130,
    },
    formLabel:{
      color:"#000000",
      fontSize: 20,
      margin: 5,
      paddingLeft: 10,
      
    },
    input:{
      width:"60%",
      borderRadius:50,
      backgroundColor:"#DCDCDC",
      height: 40,
      marginTop: 1,
      paddingLeft: 15,
    },
    buttonCalculator:{
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
      width: "70%",
      backgroundColor: "#00CED1",
      paddingTop: 14,
      paddingBottom: 14,
      marginLeft: 50,
      marginTop: 20,
     },

    textButtonCalculator:{
     fontSize: 22,
     color: "#ffffff",
    },
    messageError:{
      fontSize: 12,
      color: "red",
      fontWeight: "bold",
      paddingLeft: 15,
    },
    img: {
      flex: 1,
      resizeMode: "contain",
      marginLeft: 10,
      marginBottom: 170,
    }
});

    export default styles