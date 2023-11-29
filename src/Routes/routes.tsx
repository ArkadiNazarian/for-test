import { Dashboard } from "../Modules/dashboard";
import { EditPost } from "../Modules/editPost";
import { SignIn } from "../Modules/signin";
import { Signup } from "../Modules/signup";
import { route_names } from "./route-names";


export const routes = () => {
    const app_routes = route_names();

    const public_routes = [
        {
            path: app_routes.signup_path,
            component: <Signup />
        },
        {
            path: app_routes.signin_path,
            component: <SignIn />
        },
        // {
        //     path: app_routes.forgot_password,
        //     component: <ForgotPassword />
        // },
        // {
        //     path: app_routes.reset_password,
        //     component: <ResetPassword />
        // }
    ];

    const private_routes = [
        {
            path: app_routes.dashboard,
            component: <Dashboard />
        },
        // {
        //     path: app_routes.view_account,
        //     component: <ViewAccount />
        // },
        {
            path: app_routes.default_path,
            component: <Dashboard />
        },
        {
            path: app_routes.show_post,
            component: <EditPost />
        },
        // {
        //     path: app_routes.products,
        //     component: <Products />
        // },
        // {
        //     path: app_routes.view_product,
        //     component: <ViewProduct />
        // },
        // {
        //     path: app_routes.view_card,
        //     component: <Card />
        // }
    ];


    return {
        public_routes,
        private_routes
    }
}