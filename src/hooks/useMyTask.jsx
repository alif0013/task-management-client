import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useMyTask = () => {
    //tanstack query
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth()

    const { refetch, data: toDos = [] } = useQuery({
        queryKey: ['toDos', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/to-do?email=${user.email}`)
            return res.data;
        }
    })


    return [toDos, refetch]
};

export default useMyTask;