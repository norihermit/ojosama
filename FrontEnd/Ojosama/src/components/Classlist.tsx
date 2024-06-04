import { ClassResponse } from '../types';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import   { DataGrid, GridColDef }   from "@mui/x-data-grid";


function Classlist() {

    const getClasses = async (): Promise<ClassResponse[]> => {
        const response = await axios.get("http://localhost:8080/api/classes");
        return response.data._embedded.classes;
    }

    const { data, error, isLoading } = useQuery({
        queryKey: ["classes"], 
        queryFn: getClasses
});
    const columns: GridColDef[] = [
	{field: 'className', headerName: '類別名稱', width: 200}
];

    if(isLoading){
        return <span>Loading...</span>
    }
    else if (error){
        return <span>Error when fetching classes...</span>
    }else{
        return (
            <DataGrid
                rows={data}
                columns={columns}
                getRowId={row => row._links.self.href}
            />
);

    }
}

export default Classlist;