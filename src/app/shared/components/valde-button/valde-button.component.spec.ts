import { render, screen } from '@testing-library/angular';
import { ValdeButtonComponent } from './valde-button.component';

describe('ValdeButton Testing Library', () => {
  test('should render Button', async () => {
    await render(ValdeButtonComponent, {
      componentProperties: { label: 'My button' },
    });

    expect(screen.getByText('My button')).toBeTruthy();
  });
});
