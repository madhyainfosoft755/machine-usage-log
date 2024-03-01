import { AuthContextProvider } from "../context/AuthContext";
import axios from "axios";
import {
    useQuery,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();
const Provider = ({ children }) => {
    return (

        <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </AuthContextProvider>)

}


export default Provider;