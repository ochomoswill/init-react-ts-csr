import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Button: FunctionComponent<Props> = (props) => (
  <button type="button">Hello</button>
);

export default Button;
