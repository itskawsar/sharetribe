import { Component, PropTypes } from 'react';
import r, { div } from 'r-dom';

import css from './Topbar.css';

import Logo from '../../elements/Logo/Logo';
import SearchBar from '../../composites/SearchBar/SearchBar';
import Avatar from '../../composites/Avatar/Avatar';

const avatarProps = (avatar, railsContext) => {
  // TODO: rethink with actual railscontext
  const color = railsContext && railsContext.marketplace_color1 ? railsContext.marketplace_color1 : '#050';
  return { ...avatar, customColor: color };
};

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
      r(Avatar, { ...avatarProps(this.props.avatar, this.props.railsContext), classSet: css.topbarAvatar }),
    ]);
  }
}

Topbar.propTypes = {
  logo: PropTypes.shape(Logo.propTypes).isRequired,
  search_mode: PropTypes.string,
  search_keyword_placeholder: PropTypes.string,
  search_location_placeholder: PropTypes.string,
  avatar: PropTypes.shape(Avatar.propTypes),
  railsContext: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Topbar;
