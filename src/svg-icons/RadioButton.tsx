import * as React from 'react';
import { Colors } from '../theme';
import { Svg, Circle } from 'react-native-svg';

interface Props {
  height?: number;
  color?: string;
  selected?: boolean;
  disabled?: boolean;
}

class RadioButton extends React.PureComponent<Props> {
  static defaultProps = {
    width: 20,
    height: 20,
    color: Colors.orange.base,
    selected: true,
    disabled: false,
  };

  render() {
    let stroke;
    if (this.props.disabled) {
      stroke = Colors.common.black;
    } else if (this.props.selected) {
      stroke = this.props.color;
    } else if (!this.props.selected) {
      stroke = Colors.common.black;
    }
    const fill =
      this.props.selected && !this.props.disabled
        ? this.props.color
        : undefined;
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        height={this.props.height}
        width={this.props.height}
        viewBox="0 0 20 20"
      >
        <Circle cx="10" cy="10" r="9" stroke={stroke} strokeWidth={2} />
        <Circle cx="10" cy="10" r="6" fill={fill} />
      </Svg>
    );
  }
}

export const RadioButtonIcon = React.memo(RadioButton);
