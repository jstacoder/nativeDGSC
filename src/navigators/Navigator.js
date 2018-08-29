import { createSwitchNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Settings from '../screens/Settings'

const homeRoutes = {
    Home,
    Settings,
}

const homeConfig = {
    initialRouteName: 'Home'
}

export default createSwitchNavigator(homeRoutes, homeConfig)