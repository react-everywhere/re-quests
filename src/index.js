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


Request.Init = RequestInit;
Request.Start = RequestStart;
Request.Success = RequestSuccess;
Request.Failure = RequestFailure;
Request.Error = RequestError;
Request.Defer = Defer;
