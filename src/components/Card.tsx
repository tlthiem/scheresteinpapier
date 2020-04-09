import * as React from 'react';

export interface CardProps {
  headline: string;
  body?: string;
  nenner?: string;
  zaehler?: string;
  buttonOnClick?(event?: React.MouseEvent): any;
  buttonLabel?: string;
}

/**Card Template module.
 *
 * Displays a Button when both `buttonOnClick` and `buttonLabel` props are truthy.
 */
const Card: React.SFC<CardProps> = ({ headline, body, nenner, zaehler, buttonOnClick, buttonLabel }) => {
  return (
    <React.Fragment>
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{headline}</h4>
        </div>
        <div className="card-body" style={{ whiteSpace: 'pre-line' }}>
          <h1 className="card-title pricing-card-title">
            <small>
              {nenner}&nbsp;/&nbsp;{zaehler}
            </small>
          </h1>
          {body ? <p>{body}</p> : null}
          {buttonLabel && buttonOnClick ? (
            <button type="button" className="btn btn-lg btn-block btn-outline-primary" onClick={buttonOnClick}>
              {buttonLabel}
            </button>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
