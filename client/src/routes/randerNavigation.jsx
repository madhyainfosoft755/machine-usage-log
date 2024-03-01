import { Link, Route, Routes } from "react-router-dom";
import { nav } from "./navigation";
import { useAuthContext } from "../hooks/useAuthContext";
import AdminLayout from "../layout/Admin/adminLayout";
import PublicLayout from "../layout/Public/publicLayout";


export const RenderRoutes = () => {

     const { user } = useAuthContext();

     return (
          <Route>
               {nav.map((r, i) => {

                    if (r.isPrivate && user.isAuthenticated) {
                         return <Route key={i} path={r.path} element={r.element} />
                    } else if (!r.isPrivate) {
                         return <Route key={i} path={r.path} element={r.element} />
                    } else return false
               })}

          </Route>
     )
}
