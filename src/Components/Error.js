import * as React from 'react';
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Error = ({isError,errorMessage}) => { 
 
  return (
    <Modal
            transparent={true}
            animationType={'none'}
            visible={isError}
            style={{ zIndex: 1100 }}
            onRequestClose={() => { }}>
            <View style={styles.modalBackground}>
              <View style={styles.activityIndicatorWrapper}>
                <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={()=>retrurn}>
                    <Text>X</Text>
                </TouchableOpacity>
                <Text>{errorMessage}</Text>
              </View>
            </View>
          </Modal>
  );
};

const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#rgba(0, 0, 0, 0.5)',
      zIndex: 1000
    },
    activityIndicatorWrapper: {
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding:30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
  });

export default Error;