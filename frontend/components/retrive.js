import React, {Component, Fragment} from 'react';
import {
  TouchableOpacity,
  Text,
  Linking,
  View,
  Image,
  ImageBackground,
  BackHandler,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './scanstyle';
//import styles from './scanStyle';
class Retrive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scan: false,
      ScanResult: false,
      result: null,
    };
  }
  onSuccess = e => {
    this.props.navigation?.navigate('fetchitem');
    // const check = e.data.substring(0, 4);
    // console.log('scanned data' + check);
    // this.setState({
    //     result: e,
    //     scan: false,
    //     ScanResult: true
    // })
    // if (check === 'http') {
    //     Linking.openURL(e.data).catch(err => console.error('An error occured', err));
    // } else {
    //     this.setState({
    //         result: e,
    //         scan: false,
    //         ScanResult: true
    //     })
    // }
  };
  activeQR = () => {
    this.setState({scan: true});
  };
  scanAgain = () => {
    this.setState({scan: true, ScanResult: false});
  };
  render() {
    const {scan, ScanResult, result} = this.state;
    return (
      <View style={styles.scrollViewStyle}>
        <Fragment>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => BackHandler.exitApp()}></TouchableOpacity>
            <Text style={styles.textTitle}>Scan QR Code</Text>
          </View>
          {!scan && !ScanResult && (
            <View style={styles.cardView}>
              <Image
                source={require('../assets/qrcode.png')}
                style={{height: 36, width: 36}}></Image>
              <Text numberOfLines={8} style={styles.descText}>
                Please move your camera {'\n'} over the QR Code
              </Text>

              <TouchableOpacity
                onPress={this.activeQR}
                style={styles.buttonScan}>
                <View style={styles.buttonWrapper}>
                  <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>
                    Scan QR Code
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          {ScanResult && (
            <Fragment>
              <Text style={styles.textTitle1}>Result</Text>
              <View style={ScanResult ? styles.scanCardView : styles.cardView}>
                <Text>Type : {result.type}</Text>
                <Text>Result : {result.data}</Text>
                <Text numberOfLines={1}>RawData: {result.rawData}</Text>
                <TouchableOpacity
                  onPress={this.scanAgain}
                  style={styles.buttonScan}>
                  <View style={styles.buttonWrapper}>
                    <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>
                      Click to scan again
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Fragment>
          )}
          {scan && (
            <QRCodeScanner
              reactivate={true}
              showMarker={true}
              ref={node => {
                this.scanner = node;
              }}
              onRead={this.onSuccess}
              topContent={
                <Text style={styles.centerText}>
                  Please move your camera {'\n'} over the QR Code
                </Text>
              }
              bottomContent={
                <View>
                  <TouchableOpacity
                    style={styles.buttonScan2}
                    onPress={() => this.scanner.reactivate()}
                    onLongPress={() =>
                      this.setState({scan: false})
                    }></TouchableOpacity>
                </View>
              }
            />
          )}
        </Fragment>
      </View>
    );
  }
}
export default Retrive;
