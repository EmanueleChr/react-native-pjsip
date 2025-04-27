import Account from './src/Account';
import Call from './src/Call';
import Endpoint from './src/Endpoint';
import PreviewVideoView from './src/PreviewVideoView';
import RemoteVideoView from './src/RemoteVideoView';
import { NativeModules } from 'react-native';
const { PjSipModule } = NativeModules;

module.exports = {
    PjSipModule,
    Account,
    Call,
    Endpoint,
    PreviewVideoView,
    RemoteVideoView
}
