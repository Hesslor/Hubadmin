import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion';
import style from './style'

const Exterainfo= () => {

  const [activeSections,setActiveSection] = useState([0])

  const SECTIONS = [
    {
      title: 'First',
      content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
    },
    {
      title: 'Second',
      content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
    },
    {
      title: 'Third',
      content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
    },
  ];

  const renderHeader = (section) => {
    return (
      <View style={style.infoHeader}>
        <Text style={style.infoHeaderText}>{section.title}</Text>
        <Image style={style.arrowDown} source={require("../../../assets/images/down.png")}/>
      </View>
    );
  };

  const renderContent = (section) => {
    return (
      <View style={style.contentView}>
        <Text style={style.contentText}>{section.content}</Text>
      </View>
    );
  };

  const updateSections = (activeSections) => {
    setActiveSection(activeSections);
  };

  return (
    <View style={style.Accordion}>
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

export default Exterainfo;