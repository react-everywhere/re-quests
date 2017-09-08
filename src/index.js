import Request from './Request';
import RS from './redux/RequestStore';
import rr from './redux/reducer';

import * as Render from './RenderIf';
import * as States from './States';

export default Request;
export const {
    RequestInit,
    RequestStart,
    RequestSuccess,
    RequestFailure,
    RequestError
} = Render;
export const RenderIf = Render.RenderIf;
export const STATE = States;
export const RequestStore = RS;
export const reducer = rr;

Request.Init = RequestInit;
Request.Start = RequestStart;
Request.Success = RequestSuccess;
Request.Failure = RequestFailure;
Request.Error = RequestError;
Request.RenderIf = Render.RenderIf;
