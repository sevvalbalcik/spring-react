import { ProfileImage } from "@/shared/components/ProfileImage";
import { Link } from "react-router-dom";

export function UserListItem({ user }){
    return (
        <Link to={`/user/${user.id}`} style={{textDecoration: 'none'}} className="list-group-item list-group-item-action">
            <ProfileImage width={30} image={user.image}/>
            <span className="ms-2">
                {user.username}
            </span>
        </Link>
    );
}