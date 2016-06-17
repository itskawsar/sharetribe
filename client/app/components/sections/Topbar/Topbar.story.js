import { storiesOf, action } from '@kadira/storybook';
import withProps from '../../Styleguide/withProps';

import Topbar from './Topbar';

const baseProps = {
  logo: {
    href: 'http://example.com',
    text: 'Bikerrrs',
    image: 'https://s3.amazonaws.com/sharetribe-manual-assets/styleguide/bikerrrs-logo.png',
  },
  search_mode: 'keyword-and-location',
  search_keyword_placeholder: 'Search...',
  search_location_placeholder: 'Location',
  avatar: {
    image: 'https://www.gravatar.com/avatar/d0865b2133d55fd507639a0fd1692b9a',
    onClick: () => {
      action('clicked avatar');
    },
    actions: {
      inboxAction: action('clicked inbox'),
      profileAction: action('clicked profile'),
      settingsAction: action('clicked settings'),
      adminDashboardAction: action('clicked admin dashboard'),
      logoutAction: action('clicked logout'),
    },
    imageHeight: '44px',
  },
};

storiesOf('Top bar')
  .add('Basic state', () => (
    withProps(Topbar, baseProps)))
  .add('Text logo', () => (
    withProps(Topbar, { ...baseProps, logo: {
      href: 'http://example.com',
      text: 'My Marketplace',
    } })))
  .add('Long text logo', () => (
    withProps(Topbar, { ...baseProps, logo: {
      href: 'http://example.com',
      text: 'My Marketplace with a looong name',
    } })))
  .add('With keyword search', () => (
    withProps(Topbar, { ...baseProps, search_mode: 'keyword' })))
  .add('With location search', () => (
    withProps(Topbar, { ...baseProps, search_mode: 'location' })));
