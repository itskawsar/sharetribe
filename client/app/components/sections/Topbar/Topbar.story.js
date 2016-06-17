import r from 'r-dom';
import { storiesOf } from '@kadira/storybook';
import withProps, { storify, defaultRailsContext } from '../../Styleguide/withProps';

import Topbar from './Topbar';
const containerStyle = { style: { minWidth: '600px', background: 'white' } };

storiesOf('Top bar')
  .add('Picture logo 1', () => (
    withProps(Topbar, {
      logo: {
        href: 'http://example.com',
        text: 'Bikerrrs',
        image: 'https://s3.amazonaws.com/sharetribe-manual-assets/styleguide/bikerrrs-logo.png',
        image_highres: 'https://s3.amazonaws.com/sharetribe-manual-assets/styleguide/bikerrrs-logo.png',
      },
    })))
  .add('Picture logo 2', () => (
    withProps(Topbar, {
      logo: {
        href: 'http://example.com',
        text: 'Placeholder marketplace',
        image: 'http://placehold.it/350x150',
        image_highres: 'https://s3.amazonaws.com/sharetribe-manual-assets/styleguide/bikerrrs-logo.png',
      },
    })))
  .add('Short text logo', () => (
    withProps(Topbar, {
      logo: {
        href: 'http://example.com',
        text: 'My Marketplace',
      },
    })))
  .add('Long text logo', () => (
    withProps(Topbar, {
      logo: {
        href: 'http://example.com',
        text: 'My Marketplace with a long name',
      },
    })))
  .add('With keyword search', () => (
    withProps(Topbar, {
      logo: {
        href: 'http://example.com',
        text: 'Bikerrrs',
        image: 'https://s3.amazonaws.com/sharetribe-manual-assets/styleguide/bikerrrs-logo.png',
        image_highres: 'https://s3.amazonaws.com/sharetribe-manual-assets/styleguide/bikerrrs-logo.png',
      },
      search_mode: 'keyword',
      search_keyword_placeholder: 'Search...',
      search_location_placeholder: 'Location',
    })))
  .add('With location search', () => (
    withProps(Topbar, {
      logo: {
        href: 'http://example.com',
        text: 'Bikerrrs',
        image: 'https://s3.amazonaws.com/sharetribe-manual-assets/styleguide/bikerrrs-logo.png',
        image_highres: 'https://s3.amazonaws.com/sharetribe-manual-assets/styleguide/bikerrrs-logo.png',
      },
      search_mode: 'location',
      search_keyword_placeholder: 'Search...',
      search_location_placeholder: 'Location',
    })))
  .add('With keyword and location search', () => (
    withProps(Topbar, {
      logo: {
        href: 'http://example.com',
        text: 'Bikerrrs',
        image: 'https://s3.amazonaws.com/sharetribe-manual-assets/styleguide/bikerrrs-logo.png',
        image_highres: 'https://s3.amazonaws.com/sharetribe-manual-assets/styleguide/bikerrrs-logo.png',
      },
      search_mode: 'keyword-and-location',
      search_keyword_placeholder: 'Search...',
      search_location_placeholder: 'Location',
    })))
    .add('Menu on About page', () => (
      r(storify(
        r(Topbar, Object.assign({}, {
          logo: {
            href: 'http://example.com',
            text: 'Bikerrrs',
            image: 'https://s3.amazonaws.com/sharetribe-manual-assets/styleguide/bikerrrs-logo.png',
            image_highres: 'https://s3.amazonaws.com/sharetribe-manual-assets/styleguide/bikerrrs-logo.png',
          },
          search_mode: 'keyword-and-location',
          search_keyword_placeholder: 'Search...',
          search_location_placeholder: 'Location',
          menu: {
            links: [
              {
                link: 'http://example.com#about',
                title: 'About',
              },
              {
                link: 'http://example.com#link',
                title: 'Link',
              },
              {
                link: 'http://example.com#link2',
                title: 'Link2',
              },
              {
                link: 'http://example.com#longlink',
                title: 'Lorem ipsum dolor sit amet consectetur adepisci velit',
              },
            ],
          },
          locales: {
            current_locale: 'en',
            current_locale_ident: 'en',
            available_locales: [
              {
                change_locale_uri: 'http://example.com#en',
                locale_name: 'English',
                locale_ident: 'en',
              },
              {
                change_locale_uri: 'http://example.com#fi',
                locale_name: 'Suomi',
                locale_ident: 'fi',
              },
              {
                change_locale_uri: 'http://example.com#fr',
                locale_name: 'French',
                locale_ident: 'fr',
              },
            ],
          },
        }, {
          railsContext: defaultRailsContext,
        })),
        containerStyle
      ))
  ));
