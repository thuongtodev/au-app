import {StyleSheet} from 'react-native';

import {colors} from '../../modules/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topWrap: {
    height: 7,
    backgroundColor: '#00AAEA',
  },
  contentWrap: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.WHITE,
  },
  footerWrap: {
    height: 112,
  },
  textContentWrap: {
    flex: 1,
    marginVertical: 0,
    marginHorizontal: 55,
    paddingVertical: 24,
  },
  welcomeText: {
    color: '#ED1F24',
    fontSize: 48,
    fontWeight: 'bold',
  },
  textPragraph: {
    lineHeight: 24,
    fontSize: 16,
    paddingTop: 15,
  },
  imageContentWrap: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: '80%',
    resizeMode: 'contain',
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  containerButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  buttonText: {
    fontSize: 18,
    margin: 10,
  },
  iconSelect: {
    backgroundColor: 'transparent',
    borderTopWidth: 10,
    borderTopColor: 'gray',
    borderRightWidth: 10,
    borderRightColor: 'transparent',
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    width: 0,
    height: 0,
  },
  formWrap: {
    marginBottom: 20,
  },
  formItem: {
    marginTop: 10,
  },
  errorText: {
    color: '#D01C21',
    fontSize: 16,
  },
});

export default styles;