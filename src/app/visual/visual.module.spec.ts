import { VisualModule } from './visual.module';

describe('VisualModule', () => {
  let visualModule: VisualModule;

  beforeEach(() => {
    visualModule = new VisualModule();
  });

  it('should create an instance', () => {
    expect(visualModule).toBeTruthy();
  });
});
