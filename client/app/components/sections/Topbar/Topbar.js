import { Component, PropTypes } from 'react';
import r, { div } from 'r-dom';

import { t } from '../../../utils/i18n';
import { railsContext } from '../../../utils/PropTypes';
import css from './Topbar.css';

import Logo from '../../elements/Logo/Logo';
import SearchBar from '../../composites/SearchBar/SearchBar';
import Menu from '../../composites/Menu/Menu';

const LABEL_TYPE_MENU = 'menu';
const LABEL_TYPE_DROPDOWN = 'dropdown';

class Topbar extends Component {
  render() {
    const menuProps = Object.assign({}, this.props.menu, {
      key: 'menu',
      name: t('web.topbar.menu'),
      identifier: 'Menu',
      menuLabelType: LABEL_TYPE_MENU,
      content: this.props.menu.links.map((l) => (
        {
          active: l.link === this.props.railsContext.location,
          activeColor: this.props.railsContext.marketplace_color1,
          content: l.title,
          href: l.link,
          type: 'menuitem',
        }
      )),
    });

    const languageMenuProps = Object.assign({}, {
      key: 'languageMenu',
      name: this.props.locales.current_locale,
      identifier: 'LanguageMenu',
      menuLabelType: LABEL_TYPE_DROPDOWN,
      extraClasses: css.topbarLanguageMenuLabel,
      content: this.props.locales.available_locales.map((v) => (
        {
          active: v.locale_ident === this.props.locales.current_locale_ident,
          activeColor: this.props.railsContext.marketplace_color1,
          content: v.locale_name,
          href: v.change_locale_uri,
          type: 'menuitem',
        }
      )),
    });

    return div({ className: css.topbar }, [
      r(Logo, { ...this.props.logo, classSet: css.topbarLogo }),
      this.props.search_mode ?
        r(SearchBar, {
          mode: this.props.search_mode,
          keywordPlaceholder: this.props.search_keyword_placeholder,
          locationPlaceholder: this.props.search_location_placeholder,
          onSubmit: (data) => {
            // TODO: submit with actual data
            console.log(data); // eslint-disable-line no-console
          },
        }) :
        null,
      this.props.menu ? r(Menu, menuProps) : null,
      this.props.locales ? r(Menu, languageMenuProps) : null,
    ]);
  }
}

Topbar.propTypes = {
  logo: PropTypes.shape(Logo.propTypes).isRequired,
  search_mode: PropTypes.string,
  search_keyword_placeholder: PropTypes.string,
  search_location_placeholder: PropTypes.string,
  menu: PropTypes.shape({
    links: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })),
  }).isRequired,
  locales: PropTypes.shape({
    current_locale: PropTypes.string.isRequir,
    current_locale_ident: PropTypes.string.isRequired,
    available_locales: PropTypes.arrayOf(PropTypes.shape({
      locale_name: PropTypes.string.isRequired,
      locale_ident: PropTypes.string.isRequired,
      change_locale_uri: PropTypes.string.isRequired,
    })).isRequired,
  }),
  railsContext,
};

export default Topbar;
