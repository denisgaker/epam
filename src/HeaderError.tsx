import * as React from 'react';
import { HeaderErrorProps } from './HeaderErrorInterface';

const withError = (Component: React.FC) => ({isError, ...props}: HeaderErrorProps) => isError ? <h2 className="HeaderError">Шапку потеряли...</h2> : <Component {...props} />;
withError.displayName = 'withError';
export default withError;
