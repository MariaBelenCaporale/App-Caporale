import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      marginHorizontal: 20,
    },


    listContainer: {
        flex:1,
        backgroundColor:'white',
        marginVertical:20,
    },
    itemContainer: {
        height: 80,
        justifyContent: 'center',
        backgroundColor: 'yellow',
        borderRadius: 5,
        marginVertical: 5,
    },
    item: {
        fontSize: 20,
        fontWeight: 16,
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: 10,
    },
    modalContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 60,
      paddingVertical: 20,
    },
    modalTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalDetailContainer: {
      paddingVertical: 20,
    },
    modalDetailMessage: {
      fontSize: 14,
      color: '#212121',
    },
    selectedEvent: {
      fontSize: 14,
      color: '#212121',
      fontWeight: 'bold',
      paddingVertical: 10,
      textAlign: 'center',
      marginBottom: 20,
    },
    buttonContainer: {
      width: "80%",
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });

  export default styles;