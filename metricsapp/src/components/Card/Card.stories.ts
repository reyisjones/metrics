import { Card } from './Card';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    title: 'Card Title',
    children: 'This is the card content. It can contain any React elements.',
  },
};

export const WithoutTitle = {
  args: {
    children: 'This card has no title, just content.',
  },
};

export const HighElevation = {
  args: {
    title: 'High Elevation Card',
    children: 'This card has a high elevation shadow.',
    elevation: 'high',
  },
};

export const LargePadding = {
  args: {
    title: 'Large Padding',
    children: 'This card has large padding.',
    padding: 'large',
  },
};

export const Hoverable = {
  args: {
    title: 'Hoverable Card',
    children: 'Hover over this card to see the effect.',
    hoverable: true,
  },
};
