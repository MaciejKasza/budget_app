import React from "react";
import { Widget } from "./Widget";
import { WIDGET_TYPE } from "../../utils/enum";
import { Link } from "react-router-dom";
import {
  BALANCE_WIGET_CONFIG,
  DEFAULT_WIGET_CONFIG,
  INCOME_WIDGET_CONFIG,
  OUTCOME_WIDGET_CONFIG,
  TRANSACTION_WIDGET_CONFIG,
} from "../../utils/widgetConfig";
import styled from "styled-components";

const MetricsWidget = ({ type, data, width }) => {
  let config = DEFAULT_WIGET_CONFIG;

  switch (type) {
    case WIDGET_TYPE.METRICS.BALANCE:
      config = BALANCE_WIGET_CONFIG;
      break;
    case WIDGET_TYPE.METRICS.INCOME:
      config = INCOME_WIDGET_CONFIG;
      break;
    case WIDGET_TYPE.METRICS.OUTCOME:
      config = OUTCOME_WIDGET_CONFIG;
      break;
    case WIDGET_TYPE.METRICS.TRANSACTION:
      config = TRANSACTION_WIDGET_CONFIG;
      break;
    default:
      config = DEFAULT_WIGET_CONFIG;
      break;
  }

  return (
    <Widget width={width}>
      <StyledWidgetContent>
        <StyledWidgetHeader>
          <div className="img">{config.img}</div>
          <div className="">
            <h3>{config.title}</h3>
            <h2>{data.value}</h2>
          </div>
        </StyledWidgetHeader>
        <StyledWidgetFooter>
          <Link to={config.link}>
            {config.urlTekst} <span>&#62;</span>{" "}
          </Link>
        </StyledWidgetFooter>
      </StyledWidgetContent>
    </Widget>
  );
};

export default MetricsWidget;

const StyledWidgetContent = styled.div``;

const StyledWidgetHeader = styled.div`
  display: flex;
  gap: 8px;

  .img {
    width: 48px;
    aspect-ratio: 1/1;
  }

  h2,
  h3 {
  }

  h3 {
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSizes.l};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

const StyledWidgetFooter = styled.div`
  text-align: end;
  margin-top: 32px;
  color: ${({ theme }) => theme.fontColors.purpure};

  span {
    /* margin-left: 8px; */
  }

  &:hover {
    color: ${({ theme }) => theme.fontColors.darkPurpure};
  }
`;
