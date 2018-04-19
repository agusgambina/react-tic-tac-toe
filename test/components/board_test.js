import { renderComponent, expect } from '../test_helper';
import Board from '../../src/components/board';

describe('Board', () => {
  it('exist', () => {
    const component = renderComponent(Board);
    expect(component).to.exist;
  });
});
