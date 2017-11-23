import { ExampleLib } from '../';

describe('> Example test', () => {
  let example: ExampleLib;

  beforeEach(() => {
    example = new ExampleLib();
  });

  it('# Should get message', () => {
    expect(example.getMessage()).toBe('My lib message!!');
  });
});
