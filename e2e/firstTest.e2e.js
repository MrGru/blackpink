const {device, element, by} = require('detox');

describe('Login', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have login screen', async () => {
    await expect(element(by.id('LoginScreen'))).toBeVisible();
  });
});
