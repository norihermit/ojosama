import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';

type DialogFormProps = {
    drama: {
        dramaName: string;
        dramaCountry: string;
        dramaIntro: string;
        dramaYear: string;
        dramaEpisode: string;
    };
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readOnly?: boolean; // 添加 readOnly 屬性
};

function DramaDialogContent({ drama, handleChange, readOnly = false }: DialogFormProps) {
    return (
        <DialogContent>
            <TextField
                label="Name"
                name="dramaName"
                value={drama.dramaName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                InputProps={{
                    readOnly: readOnly,
                }}
            />
            <TextField
                label="Country"
                name="dramaCountry"
                value={drama.dramaCountry}
                onChange={handleChange}
                fullWidth
                margin="normal"
                InputProps={{
                    readOnly: readOnly,
                }}
            />
            <TextField
                label="Intro"
                name="dramaIntro"
                value={drama.dramaIntro}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={4} // 设置行数
                InputProps={{
                    readOnly: readOnly,
                }}
            />
            <TextField
                label="Year"
                name="dramaYear"
                value={drama.dramaYear}
                onChange={handleChange}
                fullWidth
                margin="normal"
                InputProps={{
                    readOnly: readOnly,
                }}
            />
            <TextField
                label="Episode"
                name="dramaEpisode"
                value={drama.dramaEpisode}
                onChange={handleChange}
                fullWidth
                margin="normal"
                InputProps={{
                    readOnly: readOnly,
                }}
            />
        </DialogContent>
    );
}

export default DramaDialogContent;
