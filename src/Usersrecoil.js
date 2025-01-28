import { atom } from "recoil";
import UserData2 from "./Userdata";
const Users = atom({
    key: '40', 
    default:UserData2, 
  });
export default Users;