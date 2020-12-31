![CI Android](https://github.com/MrGru/blackpink/workflows/CI%20Android/badge.svg?branch=master)
![CI iOS](https://github.com/MrGru/blackpink/workflows/CI%20iOS/badge.svg?branch=master)

## Boilerplate:

### 1. Feature

- React native navigation => Change to React navigation
- Mobx => Change to Recoil
- i18next
- axios
- theme

Development:
-> Static test:

- husky
- eslint
- prettier
- commmitlint

-> Dynamic test:

- jest
- detox

Release:

- semantic-release
  - export GH_TOKEN=<Your GH_TOKEN setup from developer and Secrets>
  - run: npm run release

Example commit message type:

```
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")

- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

Example:
chore: run tests on travis ci
fix(server): send cors headers
feat(blog): add comment section

```

## Mobile development process

### 1. Init project

#### Input Requirement:

- Package name/ Bundle ID
- Project name
- App name
- Icon

#### Check requirement with:

- Using map: (google/mapbox)
- Using chart: (MPchart, SVG)
- Using notification: Setup firebase and config app information
- Update online, update rule: code push
- Using analytics/crash report: google
- IAP
- Deeplink for mobile.
- Other specific features.

### 2. Setup environment

#### Preparation:

Code Signing: https://www.designveloper.com/blog/ios-android-code-signing/

- [Prepare keystore android](https://reactnative.dev/docs/signed-apk-android 'React native docs for generate keystore and config for Android')
- Prepare certification ios

#### Git flow:

- Local / Dev (for testing) -> branch: develop
- STG (for customer) -> branch: stg
- Production (for end-user) -> branch: master
- Production with feature: -> branch: version

Config build for environment:

- Android: [using flavor](https://developer.android.com/studio/build/build-variants)
- IOS: [using schema](https://medium.com/flawless-app-stories/managing-different-environments-using-xcode-build-schemes-and-configurations-af7c43f5be19)

#### Setup CI/CD:

##### - CI:

Requirement:

- Setup static check library: eslint with rule, prettier.
- Validate testID property for testing component in react native.

##### - CD:

- Android:
  - Build with gradle
  - Upload to google play with tracks (internal testing, alpha testing, beta testing).
- IOS:
  - Build with fastlane.
  - Upload to testflight.

### 3. Develop feature

- Rule when develop
- Structure project
- Best practice with new JS feature:
  - Clean
  - Performance
  - Readable code
  - Sharing code in team (code of conduct).

### 4. Publish App

- Security

* jail monkey: https://github.com/GantMan/jail-monkey
* http => https with ssl pinning https://github.com/MaxToyberman/react-native-ssl-pinning
* token storage and sensitive data: https://github.com/mCodex/react-native-sensitive-info, https://github.com/oblador/react-native-keychain

- Policy of store:

* Android
* IOS

- Requirement:

* Description
* Short description
* Screenshot
* Feature image
* Category
* Rating content

### 5. Monitor, Operation, Maintain App.
