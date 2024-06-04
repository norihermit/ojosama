import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import { ClassResponse, DramaDTO } from '../types'; // 確保路徑正確

function Classlist() {
    const [selectedClassName, setSelectedClassName] = useState<string | null>(null);
    const [dramas, setDramas] = useState<DramaDTO[]>([]);
    const [isLoadingDramas, setIsLoadingDramas] = useState<boolean>(false);
    const [errorDramas, setErrorDramas] = useState<string | null>(null);

    const getClasses = async (): Promise<ClassResponse[]> => {
        const response = await axios.get("http://localhost:8080/api/classes");
        const classes = response.data._embedded.classes;
        return classes.map((classItem) => ({ ...classItem, id: classItem._links.self.href.split('/').pop() }));
    };

    const getDramasByClassName = async (className: string): Promise<DramaDTO[]> => {
        const response = await axios.get(`http://localhost:8080/api/dramas/search/findDramaWithClassesByClassName`, {
            params: { className }
        });
        const dramas = response.data._embedded.dramas;
        return dramas.map((drama, index) => ({ ...drama, id: drama.id || index })); // 確保每個資料行都有唯一的 id 屬性
    };

    const { data, error, isLoading } = useQuery({
        queryKey: ["classes"],
        queryFn: getClasses
    });

    const columns: GridColDef[] = [
        { field: 'className', headerName: '類別名稱', width: 180 }
    ];

    const handleRowClick = async (params: any) => {
        const className = params.row.className; // 獲取類別名稱
        setSelectedClassName(className);
        setIsLoadingDramas(true);
        setErrorDramas(null);

        try {
            const dramasData = await getDramasByClassName(className);
            setDramas(dramasData);
        } catch (err) {
            setErrorDramas('Error when fetching dramas...');
        } finally {
            setIsLoadingDramas(false);
        }
    };

    if (isLoading) {
        return <span>Loading classes...</span>;
    }
    if (error) {
        return <span>Error when fetching classes...</span>;
    }

    return (
        <div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    getRowId={(row) => row.id}
                    onRowClick={handleRowClick}
                />
            </div>
            {selectedClassName && (
                <div style={{ marginTop: 20 }}>
                    <h2>{selectedClassName} 列表</h2>
                    {isLoadingDramas ? (
                        <span>Loading dramas...</span>
                    ) : errorDramas ? (
                        <span>{errorDramas}</span>
                    ) : (
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={dramas}
                                columns={[
                                    { field: 'dramaName', headerName: '劇名', width: 200 },
                                    { field: 'dramaCountry', headerName: '國家', width: 200 },
                                    { field: 'dramaIntro', headerName: '簡介', width: 400 },
                                    { field: 'dramaYear', headerName: '年份', width: 100 },
                                    { field: 'dramaEpisode', headerName: '集數', width: 100 },
                                    { field: 'dramaClass', headerName: '類別', width: 200 }
                                ]}
                                getRowId={(row) => row.id}
                                autoHeight
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Classlist;
