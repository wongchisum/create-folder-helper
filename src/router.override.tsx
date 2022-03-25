///@ts-nocheck 
import Hello from '@/pages/Hello';
import World from '@/pages/Hello/World';
import Post from '@/pages/Post';
import User from '@/pages/User';
import Login from '@/pages/User/Login';
import Logout from '@/pages/User/Logout';

// Router config 
 export const routes = [ 
{path:'/Hello',component:<Hello />},
{path:'/Hello/World',component:<World />},
{path:'/Post',component:<Post />},
{path:'/User',component:<User />},
{path:'/User/Login',component:<Login />},
{path:'/User/Logout',component:<Logout />}
]