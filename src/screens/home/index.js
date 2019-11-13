import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';

import {
  Container,
  Content,
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  Title,
  Description,
  Annotation,
  SafeAreaView,
} from './styles';

const Home = () => {
  let offset = 0;
  const translateY = new Animated.Value(0); // Por atualizar várias vezes, não é bom usar state
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  ); // Pega o valor da posição Y

  const onHandlerStateChanged = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  };

  return (
    <SafeAreaView>
      <Container>
        <Header />
        <Content>
          <Menu translateY={translateY} />

          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}>
            <Card
              style={{
                transform: [
                  {
                    translateY: translateY.interpolate({
                      inputRange: [-350, 0, 380],
                      outputRange: [-50, 0, 380],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}>
              <CardHeader>
                <Icon name="attach-money" size={28} color="#666" />
                <Icon name="visibility-off" size={28} color="#666" />
              </CardHeader>
              <CardContent>
                <Title>Saldo disponível</Title>
                <Description>R$ 15.000,00</Description>
              </CardContent>
              <CardFooter>
                <Annotation>
                  Transferência de R$ 20,00 recebida de Luciana hoje às 20h00
                </Annotation>
              </CardFooter>
            </Card>
          </PanGestureHandler>
        </Content>

        <Tabs translateY={translateY} />
      </Container>
    </SafeAreaView>
  );
};

export default Home;
