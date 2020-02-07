import React from "react";
import PropTypes from "prop-types";
import { useBootstrapPrefix } from "react-bootstrap/ThemeProvider";
import { Tooltip } from "react-bootstrap";
import classNames from "classnames";

const DEFAULT_CLASS_PREFIX = "range-slider";

let idIndex = 0;

const RangeSlider = React.forwardRef(
  (
    {
      size,
      disabled = false,
      value,
      onChange,
      min = 0,
      max = 100,
      step,
      variant = "primary",
      inputProps = {},
      tooltip = "auto",
      tooltipPlacement = "bottom",
      tooltipLabel,
      tooltipProps = {},
      bsPrefix,
      className
    },
    ref
  ) => {
    const prefix = useBootstrapPrefix(bsPrefix, DEFAULT_CLASS_PREFIX);

    const isTooltip = tooltip === "auto" || tooltip === "on";

    const classes = classNames(
      className,
      prefix,
      size && `${prefix}--${size}`,
      disabled && "disabled",
      variant && `${prefix}--${variant}`
    );

    const inputEl = (
      <input
        type="range"
        className={classes}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        disabled={disabled}
        ref={ref}
        style={{
          "--value": value
        }}
        {...inputProps}
      />
    );

    if (isTooltip) {
      const wrapClasses = classNames(
        `${prefix}__wrap`,
        size && `${prefix}__wrap-${size}`
      );

      const tooltipClasses = classNames(
        `${prefix}__tooltip`,
        isTooltip && `${prefix}__tooltip--${tooltip}`,
        tooltipPlacement && `${prefix}__tooltip--${tooltipPlacement}`
      );

      const tooltipId = `${DEFAULT_CLASS_PREFIX}__tooltip--${++idIndex}`;

      const fract = value / (max - min);
      const percentLeft = fract * 100;
      const fractFromCentre = (fract - 0.5) * 2;
      const adjustment = fractFromCentre * -8; // Half thumb width

      return (
        <span className={wrapClasses}>
          {inputEl}

          <div
            className={tooltipClasses}
            style={{
              left: `calc(${percentLeft}% + ${adjustment}px)`
            }}
          >
            <Tooltip
              id={tooltipId}
              placement={tooltipPlacement}
              className="show"
              {...tooltipProps}
            >
              {tooltipLabel ? tooltipLabel(value) : value}
            </Tooltip>
          </div>
        </span>
      );
    } else {
      return inputEl;
    }
  }
);

RangeSlider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"]),
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "light"
  ]),
  inputProps: PropTypes.object,
  tooltip: PropTypes.oneOf(["auto", "on", "off"]),
  tooltipPlacement: PropTypes.oneOf(["top", "bottom"]),
  tooltipLabel: PropTypes.func,
  tooltipProps: PropTypes.object,
  className: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  bsPrefix: PropTypes.string
};

export default RangeSlider;
