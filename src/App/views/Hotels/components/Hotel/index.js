import React, {Component} from 'react';
import {Image, TouchableHighlight} from 'react-native';
import {Card, CardItem, Text} from 'native-base';
import {Col, Row, Grid} from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Hotel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {hotel, navigation} = this.props;
    const {name, stars, image, price} = this.props.hotel;
    return (
      <TouchableHighlight
        underlayColor="hsla(0, 0%, 0%, 0.1)"
        onPress={() => {
          navigation.navigate('Details', hotel)
        }}
        style={{flex: 1, padding: 0}}
      >
        <Card>
          <CardItem cardBody>
            <Grid>
              <Row>
                <Col>
                  <Image
                    resizeMode='cover'
                    resizeMethod='auto'
                    style={{width: '100%', height: 165}}
                    source={{uri: image}}
                  />
                </Col>
              </Row>
            </Grid>
          </CardItem>

          <CardItem footer>
            <Grid>
              <Row>
                <Col>
                  <Grid>
                    <Row siz={40}>
                      <Col>
                        <Text>{name}</Text>
                      </Col>
                    </Row>
                    <Row siz={60}>
                      <Col>
                        <Icon
                          name='star'
                          color={stars >= 1 ? 'hsla(58, 80%, 55%, 1)' : 'hsla(0, 0%, 30%, 1)'}
                          size={20} />
                      </Col>
                      <Col>
                        <Icon
                          name='star'
                          color={stars >= 2 ? 'hsla(58, 80%, 55%, 1)' : 'hsla(0, 0%, 30%, 1)'}
                          size={20} />
                      </Col>
                      <Col>
                        <Icon
                          name='star'
                          color={stars >= 3 ? 'hsla(58, 80%, 55%, 1)' : 'hsla(0, 0%, 30%, 1)'}
                          size={20} />
                      </Col>
                      <Col>
                        <Icon
                          name='star'
                          color={stars >= 4 ? 'hsla(58, 80%, 55%, 1)' : 'hsla(0, 0%, 30%, 1)'}
                          size={20} />
                      </Col>
                      <Col>
                        <Icon
                          name='star'
                          color={stars >= 5 ? 'hsla(58, 80%, 55%, 1)' : 'hsla(0, 0%, 30%, 1)'}
                          size={20} />
                      </Col>
                    </Row>
                  </Grid>
                </Col>
                <Col>
                  <Grid>
                    <Row size={50}>
                      <Col>
                        <Text>Precio por noche:</Text>
                      </Col>
                    </Row>
                    <Row size={50}>
                      <Col>
                        <Text>{`ARS ${price}`}</Text>
                      </Col>
                    </Row>
                  </Grid>
                </Col>
              </Row>
            </Grid>
          </CardItem>
        </Card>
      </TouchableHighlight>
    );
  }
}
