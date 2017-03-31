import Request from './Request';
import * as Render from './RenderIf';
import Defer from './Defer';


export default Request;
export const {
    RequestInit,
    RequestStart,
    RequestSuccess,
    RequestFailure,
    RequestError
} = Render;
export const RequestDefer = Defer;
export const RenderIf = Render.RenderIf;

Request.Init = RequestInit;
Request.Start = RequestStart;
Request.Success = RequestSuccess;
Request.Failure = RequestFailure;
Request.Error = RequestError;
Request.Defer = Defer;
Request.RenderIf = Render.RenderIf;
