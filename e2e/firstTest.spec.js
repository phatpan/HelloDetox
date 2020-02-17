describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show "Step One"', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });

  it('should show "See Your Changes"', async () => {
    await expect(element(by.text('See Your Changes'))).toBeVisible();
  });

});
