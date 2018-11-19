//  Dependencies
import React, {Component} from 'react';
import {ScrollView, Image} from 'react-native';
import {View, Card, CardItem, Text} from 'native-base';
import {Col, Row, Grid} from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    const name = navigation.getParam('name', 'Este hotel no tiene nombre');
    const stars = navigation.getParam('stars', 0);
    const image = navigation.getParam('image', 'Este hotel no tiene imagen');
    const region = navigation.getParam('region', 'Este hotel no tiene mapa');
    const price = navigation.getParam('price', 0);

    return (
      <View style={{flex: 1, padding: 10}}>
        <Card style={{flex: 1}}>
          <CardItem style={{flex: 1}}>
            <Image
              resizeMode='cover'
              source={{uri: image}}
              style={{
                width: '109.5%',
                height: 275,
                position: 'absolute',
                top: 0,
                left: 0,
              }}/>
            <Grid style={{backgroundColor: 'hsla(0, 0%, 0%, 0.4)'}}>
              <Row>
                <Col style={{backgroundColor: 'hsla(0, 0%, 0%, .5)', padding: 10}}>
                  <ScrollView style={{flex: 1}}>
                    <View style={{flex: 1}}>
                      <Grid style={{flex: 1}}>
                        <Row size={45}>
                          <Col>
                            <Grid style={{height: 303}}>
                              <Row style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{
                                  color: 'hsla(0, 0%, 100%, 1)',
                                  textAlign: 'center',
                                  fontSize: 36,
                                  fontWeight: 'bold',
                                }}>{name}</Text>
                              </Row>
                              <Row style={{height: 50, backgroundColor: 'hsla(0, 0%, 100%, .6)'}}>
                                <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                                  <Icon
                                    name='star'
                                    color={stars >= 1 ? 'hsla(58, 80%, 55%, 1)' : 'hsla(0, 0%, 30%, 1)'}
                                    size={25}/>
                                </Col>
                                <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                                  <Icon
                                    name='star'
                                    color={stars >= 2 ? 'hsla(58, 80%, 55%, 1)' : 'hsla(0, 0%, 30%, 1)'}
                                    size={25}/>
                                </Col>
                                <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                                  <Icon
                                    name='star'
                                    color={stars >= 3 ? 'hsla(58, 80%, 55%, 1)' : 'hsla(0, 0%, 30%, 1)'}
                                    size={25}/>
                                </Col>
                                <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                                  <Icon
                                    name='star'
                                    color={stars >= 4 ? 'hsla(58, 80%, 55%, 1)' : 'hsla(0, 0%, 30%, 1)'}
                                    size={25}/>
                                </Col>
                                <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                                  <Icon
                                    name='star'
                                    color={stars >= 5 ? 'hsla(58, 80%, 55%, 1)' : 'hsla(0, 0%, 30%, 1)'}
                                    size={25}/>
                                </Col>
                              </Row>
                            </Grid>
                          </Col>
                        </Row>
                        <Row size={45} style={{backgroundColor: 'hsla(0, 0%, 95%, 1)', overflow: 'hidden'}}>
                          <Col style={{paddingRight: 5, backgroundColor: 'hsla(0, 0%, 100%, 1)'}}>

                            <View style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              width: '100%',
                              height: 185,
                              overflow: 'hidden'
                            }}>
                              <MapView
                                provider={PROVIDER_GOOGLE}
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  bottom: 0,
                                  left: 0,
                                  right: 0,
                                }}
                                initialRegion={region}
                              >
                                <Marker
                                  coordinate={region}
                                  title={name}
                                />
                              </MapView>
                            </View>
                            <View style={{paddingHorizontal: 10}}>
                              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores
                                assumenda deleniti, dolore earum est explicabo itaque laboriosam magni mollitia nemo
                                nesciunt, perferendis possimus repudiandae sapiente? Magnam minus necessitatibus
                                ullam?</Text>
                              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores
                                assumenda deleniti, dolore earum est explicabo itaque laboriosam magni mollitia nemo
                                nesciunt, perferendis possimus repudiandae sapiente? Magnam minus necessitatibus
                                ullam?</Text>
                              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores
                                assumenda deleniti, dolore earum est explicabo itaque laboriosam magni mollitia nemo
                                nesciunt, perferendis possimus repudiandae sapiente? Magnam minus necessitatibus
                                ullam?</Text>
                            </View>
                          </Col>
                        </Row>
                        <Row size={10} style={{backgroundColor: 'hsla(0, 0%, 85%, 1)'}}>
                          <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Precio por noche: ARS {price}</Text>
                          </Col>
                        </Row>
                      </Grid>
                    </View>
                  </ScrollView>
                </Col>
              </Row>
            </Grid>
          </CardItem>
        </Card>
      </View>
    );
  }
}
