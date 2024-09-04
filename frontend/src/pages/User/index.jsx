import { getUser } from "./api";
import { Alert } from "../../shared/components/Alert";
import { Spinner } from "../../shared/components/Spinner";
import { UseRouteParamApiRequest } from "@/shared/hooks/UseRouteParamApiRequest";
import { ProfileCard } from "./components/ProfileCard";

export function User(){

    const {apiProgress, data: user, error} = 
    UseRouteParamApiRequest('id', getUser)

    
    return (<>
        {apiProgress && ( 
            <Alert styleType="secondary" center>
                <Spinner/>
            </Alert>
        )}
        {user && (
            <ProfileCard user = {user}/>
        )}
        {error && (
            <Alert styleType="danger">{error}</Alert>
            )}
      </>
    );
  
}
