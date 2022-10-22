import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import logo from '../assets/Plane.png'
import user from '../assets/User.png'
import backbtn from '../assets/Arrow.png'

const Jadwal = [
  {
    id: '1',
    asal: 'Bandung',
    tujuan: 'Padang',
    maskapai: 'Super Air Jet',
    waktu : '20 Apr 2022, 10:00',

  },
  {
    id: '2',
    asal: 'Padang',
    tujuan: 'Bandung',
    maskapai: 'Super Air Jet',
    waktu : '20 Apr 2022, 10:00',
  },
  {
    id: '3',
    asal: 'Padang',
    tujuan: 'Bandung',
    maskapai: 'Super Air Jet',
    waktu : '20 Apr 2022, 10:00',
  },
  {
    id: '4',
    asal: 'Padang',
    tujuan: 'Bandung',
    maskapai: 'Super Air Jet',
    waktu : '20 Apr 2022, 10:00',
  },
  {
    id: '5',
    asal: 'Padang',
    tujuan: 'Bandung',
    maskapai: 'Super Air Jet',
    waktu : '20 Apr 2022, 10:00',
  },
  {
    id: '6',
    asal: 'Padang',
    tujuan: 'Bandung',
    maskapai: 'Super Air Jet',
    waktu : '20 Apr 2022, 10:00',
  },
  {
    id: '7',
    asal: 'Padang',
    tujuan: 'Bandung',
    maskapai: 'Super Air Jet',
    waktu : '20 Apr 2022, 10:00',
  },
  {
    id: '8',
    asal: 'Padang',
    tujuan: 'Bandung',
    maskapai: 'Super Air Jet',
    waktu : '20 Apr 2022, 10:00',
  },
  {
    id: '9',
    asal: 'Padang',
    tujuan: 'Bandung',
    maskapai: 'Super Air Jet',
    waktu : '20 Apr 2022, 10:00',
  },

];


const Terbang = ({ navigation }) => {
  const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.tujuanasal}>{item.asal}   -   {item.tujuan}</Text>
    <View style={styles.waktupesawat}>
      <Image src={logo} alt="logo" style={styles.logo}/>
      <Text style={styles.maskapai}>{item.maskapai}</Text>
      <Text style={styles.texttanggal}>{item.waktu}</Text>
    </View>    
  </View>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
              <Image src={backbtn} alt="back" style={styles.logo}/>
            </TouchableOpacity>
            <Text style={styles.heading}>Hiling.id</Text>
            <Image src={user} alt="pengguna" style={styles.logo}/>
          </View>
          <Text style={styles.heading2}>Hasil Pencarian Penerbangan</Text>
          <Text style={styles.heading2}>(tanggal Keberangkatan)</Text>
      </View>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={Jadwal}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </SafeAreaView>
      <Text style={styles.copyright}>Copyright Dzakkir Latifan Makarim - 120140240</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight || 0,
  },
  header:{
    width:'100%',
    backgroundColor: 'pink',
    padding:20,
    marginBottom:10,
  },
  heading: {
    color: 'black',
    fontSize: 30,
    fontFamily: "Sans-Serif",
  },
  heading2: {
    fontFamily: "Sans-Serif",
    color: 'black',
    textAlign:'center',
  },
  top: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
  },
  Image: {
    width:10,
  },
  item: {
    backgroundColor: '#ccffcc',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
    width:450,
    height:450,
    marginLeft:450,
    marginRight:300,
  },
  title: {
    fontSize: 32,
  },
  waktupesawat:{
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  maskapai:{
    marginLeft:-80,
    fontSize:20,
    fontWeight: "bold",
  },
  texttanggal:{
    color:'blue',
  },
  copyright: {
    color : 'gray',
    fontWeight: 'bold',
    marginBottom: '20px',
    padding:20,
    marginTop: '10px',
    textAlign: 'center',
  },
});

export default Terbang;