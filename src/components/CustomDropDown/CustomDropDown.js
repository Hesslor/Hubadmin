import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion';
import style from './style';

const CustomDropDown = ({data,setData,prevData}) => {

    const [activeSections, setActiveSection] = useState([]);
    const [selected, setSelected] = useState(prevData ? prevData.name : data[0].name);

    useEffect(() => {
      if(data){
        setSelected(prevData ? prevData.name : data[0].name);
      }
    },[]);
    
    useEffect(() => {
      if(prevData){
        setSelected(prevData ? prevData.name : data[0].name);
      }
    },[prevData]);

    const updateSections = activeSections => {
      setActiveSection(activeSections);
    }
    
  const SECTIONS = [{id: 0, sectionData: prevData ? prevData.name : data[0].name}];
  
  const renderHeader = () => {
    return (
      <View style={style.header}>
        <Text style={style.headerText}>{selected}</Text>
        <Image style={style.arrowDown} source={require("../../assets/images/down.png")}/>
      </View>
    )
  }

  const renderContent = () => {
    return (
     <FlatList data={data} scrollEnabled={false} renderItem={({item,index}) => {
        if(item.name == selected) {
          return null;
        } else {
          return (
            <TouchableOpacity style={style.contentView} key={index} onPress={() => {
              setSelected(item.name);
              setActiveSection([]);
              setData(item)}}>
              <Text style={style.contentText}>{item.name}</Text>
            </TouchableOpacity>
          )
        }
     }}/>
    )
  }

  return (
    <View>
        <Accordion
        sections={SECTIONS}
        activeSections={activeSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateSections}
        underlayColor={"transparent"}
      />
    </View>
  )
}

export default CustomDropDown