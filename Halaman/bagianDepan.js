import { React, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import date from '../assets/Date.png';
import hamburger from '../assets/Hamburger.png';
import landing from '../assets/Landing.png';
import takeoff from '../assets/Takeoff.png';
import user from '../assets/User.png';

const bagianDepan = ({ navigation }) => {
  const [berangkat, setBerangkat] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [tanggal, setTanggal] = useState("");
  

    return(
        <View style={styles.container}>
            <View style={styles.top}>
              <Image style={{ width: 50, height: 50 }} src={hamburger} alt="Hamburger" />
              <Text style={styles.header}>Hiling.id</Text>
              <Image style={{ width: 50, height: 50 }} src={user} alt="User" />
            </View>
            
            <View style={styles.card}>
              <Text style={styles.header2}>Lokasi berangkat</Text>
              <View style={styles.maininputan}>
                <Image style={{ width: 20, height: 20 }} src={takeoff} alt="Takeoff" />
                <TextInput
                  style={styles.input}
                  onChangeText={setBerangkat}
                  value={berangkat}
                  placeholder="Isi Lokasi Berangkat"
                  selectTextOnFocus={false}
                />
              </View>
              <Text style={styles.header2}>Lokasi Tujuan</Text>
              <View style={styles.maininputan}>
                <Image style={{ width: 20, height: 20 }} src={landing} alt="Landing" />
                <TextInput
                  style={styles.input}
                  onChangeText={setTujuan}
                  value={tujuan}
                  placeholder="Masukkan Lokasi Tujuan"
                />
              </View>
              <Text style={styles.header2}>Tanggal Keberangkatan</Text>
                <View style={styles.maininputan}>
                  <Image style={{ width: 50, height: 50 }} src={date} alt="Date" />
                  <TextInput
                    style={styles.input}
                    onChangeText={setTanggal}
                    value={tanggal}
                    placeholder="Masukkan Tanggal Keberangkatan"
                  />
                </View>
              <Button
                color= '#ED7D31'
                title="cari"
                onPress={() => navigation.navigate('Penerbangan')}
              />
            </View>
            
            <View style={styles.kotak}>
              <Text style={styles.copyright}>Copyright Dzakkir Latifan Makarim - 120140240</Text>
            </View>
            
    
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    overflow : "hidden",
  },
  top: {
    flexDirection:'row',
    alignItems: 'center',
    padding:40,
    justifyContent: 'space-between'
  },
  maininputan: {
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:20,
    marginTop:5,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:3,
    borderColor: 'blue',
    
  },
  header: {
    color: 'white',
    fontSize: 30,
    fontFamily: "Sans-Serif",
  },
  header2: {
    fontFamily: "Sans-Serif",
  },
  card: {
    backgroundColor: '#ccffcc',
    margin: 'auto',
    width: '80%',
    padding:20,
    borderRadius:10,
  },
  input: {
    height: 40,
    width: '100%',
    padding: 10,
    borderRadius:3,
  },
  kotak: {
    marginTop: '-100px',
    zIndex: -1,
    flex:1,
    borderRadius:10,
    backgroundColor: 'white',
  },
  copyright: {
    color : 'gray',
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 'auto',
    textAlign: 'center',
  }
});

export default bagianDepan;