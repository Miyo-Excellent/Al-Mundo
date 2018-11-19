// Dependencies
import React, {Component} from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {View, Text, Button} from 'native-base';
import {Col, Row, Grid} from "react-native-easy-grid";
import {BackHandler} from "react-native";
import {NavigationActions} from "react-navigation";

//  Components
import {Hotel} from './components';

export default class Hotels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: []
    };
    this.getAllHotels = this.getAllHotels.bind(this);
    this.createHotel = this.createHotel.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    this.getAllHotels();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const {dispatch, index} = this.props.navigation;
    if (index === 0) return false;

    dispatch(NavigationActions.back());
    return true;
  };

  async getAllHotels() {
    const self = this;
    //  await fetch('http://localhost:3000/getAllHotels', {
    //  await fetch('http://127.0.0.1:3000/getAllHotels', {
    await fetch('http://192.168.1.67:3000/getAllHotels', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response)
      .then(response => JSON.parse(response._bodyInit))
      .then(({hotels}) => {
        self.setState({hotels});
      })
      .then(() => {
        console.log(self.state.hotels)
      })
      .catch(error => console.log(error));
  }

  async createHotel({ name, stars, image, price }) {
    const body = JSON.stringify({
      hotel: { name, stars, image, price }
    });

    //  await fetch('http://localhost:3000/getAllHotels', {
    //  await fetch('http://127.0.0.1:3000/getAllHotels', {
    await fetch('http://192.168.1.67:3000/createHotel', {
      method: 'POST',
      body,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {
    const {getAllHotels} = this;
    const {navigation} = this.props;
    const {hotels} = this.state;
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor="hsla(0, 0%, 0%, 1)"
          barStyle="light-content"
          hidden
        />

        <Grid>
          <Row size={7}>
            <Col>
              <Grid>
                <Row style={{backgroundColor: "hsla(0, 0%, 40%, 1)"}}>
                  <Col
                    size={30}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                    <Button
                      onPress={() => alert('Volver')}
                      color="hsla(0, 0%, 40%, 1)"
                      block
                      light
                      rounded
                      style={{
                        marginLeft: 5,
                        width: '70%',
                        height: '80%',
                      }}
                    >
                      <Text>Volver</Text>
                    </Button>
                  </Col>
                  <Col
                    size={70}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingRight: 10
                    }}>
                    <Text style={{
                      fontSize: 26,
                      fontWeight: 'bold',
                      color: '#fff',
                      width: '100%',
                      textAlign: 'center'
                    }}>Lista de hoteles</Text>
                  </Col>
                </Row>
              </Grid>
            </Col>
          </Row>
          <Row size={85}>
            <Col>
              <ScrollView style={{paddingHorizontal: 10}} showsVerticalScrollIndicator={false}>
                {hotels.map(hotel => <Hotel
                  navigation={navigation}
                  key={`hotel_${hotel.name}`}
                  hotel={hotel}
                />)}
              </ScrollView>
            </Col>
          </Row>
          <Row size={7}>
            <Col>
              <Button
                onPress={() => {
                  getAllHotels();
                }}
                color="hsla(0, 0%, 40%, 1)"
                block
              >
                <Text>Actualizar Hoteles</Text>
              </Button>
            </Col>
          </Row>
        </Grid>
      </View>
    );
  }
}
