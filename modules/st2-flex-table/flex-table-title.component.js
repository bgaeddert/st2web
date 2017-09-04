import React from 'react';

export default class FlexTableTitle extends React.Component {
  static propTypes = {
    children: React.PropTypes.string,
    collapsed: React.PropTypes.bool,
    icon: React.PropTypes.string,
    onToggle: React.PropTypes.func.isRequired
  }

  render() {
    const { children, icon, onToggle } = this.props;

    const props = {
      className: 'st2-flex-table__caption',
      onClick: (e) => onToggle(e)
    };

    if (icon) {
      props.className += ' st2-flex-table__caption--pack';
    }

    return <div {...props}>
      { icon && <img src={icon} /> }
      <h2 className="st2-flex-table__caption-title">{ children }</h2>
    </div>;
  }
}