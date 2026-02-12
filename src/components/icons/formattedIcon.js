import React from 'react';
import PropTypes from 'prop-types';
import {
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconLinkedin,
  IconStar,
} from '@components/icons';

const FormattedIcon = ({ name }) => {
  const icons = {
    External: <IconExternal />,
    Folder: <IconFolder />,
    Fork: <IconFork />,
    GitHub: <IconGitHub />,
    Linkedin: <IconLinkedin />,
    Star: <IconStar />,
  };

  return icons[name] || <IconExternal />;
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
