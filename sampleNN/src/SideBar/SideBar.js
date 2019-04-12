import React, {Component} from 'react';
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Home", "Chat", "Profile"];
export default class SideBar extends Component<Props> {
    render() {
        return(
            <Container>
                <Content>
                    <Image
                    source={{
                        uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
                      }}
                      style={{
                        height: 120,
                        alignSelf: "stretch",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >

                    </Image>
                    <Image>

                    </Image>
                </Content>
            </Container>      
        )
    }
} 