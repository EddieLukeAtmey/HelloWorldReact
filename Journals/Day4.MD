## Day 4: [Maps](https://github.com/react-native-community/react-native-maps)
_I'm still using sublime and feeling very well. Today is about: **react-native-maps**_

#### Summary of the day
_details go under_
1. try integrate new node-modules:
    - maps: `react-native-maps`
    - [geolocation](https://facebook.github.io/react-native/docs/geolocation) (for getting current location)
    - actual geolocation service: [react-native-geolocation-service](https://github.com/Agontuk/react-native-geolocation-service) (fix for android's stupid bug. ios is ok)

2. setup ios
    - cocoapods
    - permission (info.plist)
    - API key (AppDelegate.m)

3. setup android
    - settings.gradle
    - build.gradle
    - AndroidManifest.xml
    - MainApplication.java

#### Installation
1. `npm install react-native-maps --save`

2. Create new PJ and setup api key on [Goggle Cloud Console](console.cloud.google.com)
    - Account: Eddie.Marvin@gmail.com
    - PJ: HelloWorldReact

3. `react-native link react-native-maps`

4. [iOS CocoaPods & rn](https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md#using-cocoapods)

    - `cd ios & pod init`
    - Examine ReactNative's [podfile](../Scripts/day4.podfile):
    - Custom HelloWorldReact's [podFile](../ios/Podfile) & `pod install`
    - [AppDelegate.m](../ios/HelloWorldReact/AppDelegate.m)
        ```
        #import <GoogleMaps/GoogleMaps.h>
        [GMSServices provideAPIKey:@"_YOUR_API_KEY_"];
        ```
    - [package.json](../package.json)
        ```
        "sript": {
            "postinstall": "./node_modules/react-native-maps/enable-google-maps REPLACE_ME_RELATIVE_PATH_TO_GOOGLE_MAPS_INSTALL"
        }
        ```

    - ios permission (info.plist):
        ```
        <key>NSLocationWhenInUseUsageDescription</key>
        <string><string>

        <!-- For background location service: -->
        <key>NSLocationAlwaysUsageDescription</key>
        <string></string>
        ```


5. Config [android](https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md#build-configuration-on-android)

    - react-native-geolocation-service: `npm i react-native-geolocation-service --save`
    _it seems `react-native link react-native-maps` does the android's configurations for us_
    - [android/settings.gradle](../android/settings.gradle)
        ```
        include ':react-native-maps'
project(':react-native-maps').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-maps/lib/android')

        include ':react-native-geolocation-service'
project(':react-native-geolocation-service').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-geolocation-service/android')
        ```

    - [android/app/build.gradle](../android/app/build.gradle)
        ```
        dependencies {
            compile(project(':react-native-geolocation-service')) {
                exclude group: 'com.google.android.gms', module: 'play-services-location'
            }
            compile 'com.google.android.gms:play-services-location:<insert your play service version here>'
        }
        ```

    - _project-wide properties_ (wtf are those?): [gradle.properties](../android/gradle.properties)
    - setting api key (finally!) and permission: [src/main/AndroidManifest](../android/app/src/main/AndroidManifest.xml)
        ```
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <application>
            <meta-data
             android:name="com.google.android.geo.API_KEY"
             android:value="Your Google maps API Key Here"/>
        </application>
        ```
    - [MainApplication.java](../android/app/src/main/java/com/helloworldreact/MainApplication.java)
    ```
        import com.airbnb.android.react.maps.MapsPackage;
        import com.agontuk.RNFusedLocation.RNFusedLocationPackage;

        // {....}

        new MapsPackage(),
        new RNFusedLocationPackage()
    ```

6. Fun part: Trying the stuff in react-native hehee

    **_Show a maps with current location and marker_**

    > 6.1. [Get location](https://github.com/Agontuk/react-native-geolocation-service):

    - List (useful and we'll use) APIs:
        ```
        1. Geolocation.requestAuthorization() // seems for ios permission
        2. Geolocation.getCurrentPosition(geo_success_callback, geo_error_callback?, geo_options?);

        // seems like 3 function below doesn't work really well on android (even with the new replacement node-module)
        3. Geolocation.watchPosition(success, [error], [options]) -> watchID
        4. Geolocation.clearWatch(watchID);
        5. Geolocation.stopObserving();
        ```

    - use `Geolocation` instead of `navigator.geolocation` ([REF](https://github.com/Agontuk/react-native-geolocation-service#usage))
        `import Geolocation from 'react-native-geolocation-service';`

    - [AndroidPermission](https://facebook.github.io/react-native/docs/permissionsandroid): this is new stuff gotta learn.

    > 6.2. Bind the map with location

    - `import MapView from 'react-native-maps'`

_gotta leave the fun part to day 5 😒 Too many stuff to get actual things to work_
