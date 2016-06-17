import { Component, PropTypes } from 'react';
import r, { div } from 'r-dom';

import css from './Topbar.css';

import Logo from '../../elements/Logo/Logo';
import SearchBar from '../../composites/SearchBar/SearchBar';
import Menu from '../../composites/Menu/Menu';

class Topbar extends Component {
  render() {
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
      this.props.menu ?
        r(Menu, Object.assign({}, this.props.menu, { key: 'menu' })) :
        null,
      this.props.languageMenu ?
        r(Menu, Object.assign({}, this.props.languageMenu, { key: 'languageMenu' })) :
        null,
    ]);
  }
}

Topbar.propTypes = {
  logo: PropTypes.shape(Logo.propTypes).isRequired,
  search_mode: PropTypes.string,
  search_keyword_placeholder: PropTypes.string,
  search_location_placeholder: PropTypes.string,
  menu: PropTypes.shape(Menu.propTypes).isRequired,
  languageMenu: PropTypes.shape(Menu.propTypes),
};

export default Topbar;
