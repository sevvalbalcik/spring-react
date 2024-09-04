import { activateUser } from "./api"
import { Alert } from "../../shared/components/Alert";
import { Spinner } from "../../shared/components/Spinner";
import { UseRouteParamApiRequest } from "@/shared/hooks/UseRouteParamApiRequest";
export function Activation(){

    const {apiProgress, data, error} = UseRouteParamApiRequest('token', activateUser)


    return (<>
        {apiProgress && ( 
            <Alert styleType="secondary" center>
                <Spinner/>
            </Alert>
        )}
        {data?.message && (
            <Alert>{data.message}</Alert>
        )}
        {error && (
            <Alert styleType="danger">{error}</Alert>
            )}
      </>
    );

}