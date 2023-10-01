import Spinner from "./Spinner";
import { useQuery} from '@apollo/client';
import { GET_PROJECTS } from '../queries/projectQueries';

const Projects = () => {

    const {loading, error, data} = useQuery(GET_PROJECTS)

    return (
        <div>

        </div>
    )
}

export default Projects