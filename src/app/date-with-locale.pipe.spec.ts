import { DateWithLocalePipe } from './date-with-locale.pipe';

describe('DateWithLocalePipe', () => {
  it('create an instance', () => {
    const pipe = new DateWithLocalePipe();
    expect(pipe).toBeTruthy();
  });
});
