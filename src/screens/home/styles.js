import styled from 'styled-components';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import theme from '../../components/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.primary};
  padding-top: ${getStatusBarHeight()}px;
`;
