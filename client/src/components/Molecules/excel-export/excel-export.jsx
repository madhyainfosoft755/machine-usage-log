import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Button } from 'flowbite-react';

function objectsToArrays(objects, keys, columns) {
    const arrays = [columns]; // First array contains the column headers

    objects.forEach(object => {
        const row = [];
        keys.forEach(key => {
            row.push(object[key]);
        });
        arrays.push(row);
    });

    return arrays;
}


const ExcelExport = ({ data, keys, columns }) => {
    // const [data, setData] = React.useState([
    //     ["Name", "Age"],
    //     ["John Doe", 30],
    //     ["Jane Smith", 25]
    // ]);

    // const keys = ["name", "age"];
    const arrays = objectsToArrays(data, keys, columns);
    console.log(data, "data excel");
    console.log(arrays, "data array");
    const fileName = "data.xlsx";

    const exportToExcel = () => {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(arrays);
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
        const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
        saveAs(blob, fileName);
    };

    const s2ab = (s) => {
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf);
        for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    };

    return (
        <div>
            <Button onClick={exportToExcel} className="mb-3" size={"md"} > Export Excel </Button>

            {/* <button onClick={}>Export to Excel</button> */}
        </div>
    );
};

export default ExcelExport;
