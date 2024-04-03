import React from 'react';
import * as XLSX from 'xlsx';

import { saveAs } from 'file-saver';
import { Button } from 'flowbite-react';
import imgData from "../../../assets/creedential_logo.png";
function objectsToArrays(objects, keys, columns) {
    const arrays = [
        [], // First empty row
        [], // Second empty row
        [], // third empty row
        [null, null, null, null, null, null, null, null, null, null], // FOURTH empty row
        [null, null, null, null, null, null, null, null, null, null], // fifth empty row
        [], // sixth empty row
        [null, null, null, null, null, null, null, null, null, null], // seventh empty row
        [null, null, null, null, null, null, null, null, null, null], // eight empty row
        [], // nine empty row
        columns]; // First array contains the column headers
    let i = 1;
    objects.forEach(object => {

        const row = [null, null, i];
        keys.forEach(key => {
            row.push(object[key]);
        });
        arrays.push(row);
        i++;
    });

    return arrays;
}


const ExcelExport = ({ data, keys, columns }) => {
    const cloumnsforexcel = [null, null, "S.No.", "Date", "Shift", "Name of the Product", "Batch Number", "Start Time", "End Time", "Done By", "Check By", "Remarks"];
    const keysofarray = ["usage_data", "shift", "product", "batch", "op_st_time", "op_ed_time", "operation_done_by", "operation_check_by", "operation_remark"];
    const arrays = objectsToArrays(data, keysofarray, cloumnsforexcel);
    console.log(data, "data excel");
    console.log(arrays, "data array");
    const fileName = "data.xlsx";

    const exportToExcel = () => {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(arrays);

        const boldStyle = { font: { bold: true } };
        const bgColorStyle = { fill: { patternType: 'solid', fgColor: { rgb: 'FFFF00' } } }; // Yellow background color
        const alignStyle = { alignment: { horizontal: 'center', vertical: 'middle' } }; // Center horizontally and vertically
        const borderStyle = {
            top: { style: 'thin' },
            bottom: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' }
        };
        const numberFormatStyle = { numFmt: '0.00%' }; // Percentage format with two decimal places


        ws['!merges'] = [
            { s: { r: 3, c: 2 }, e: { r: 4, c: 2 } },
            { s: { r: 3, c: 3 }, e: { r: 3, c: 11 } },
            { s: { r: 4, c: 3 }, e: { r: 4, c: 11 } },
            { s: { r: 6, c: 2 }, e: { r: 6, c: 5 } },
            { s: { r: 6, c: 7 }, e: { r: 6, c: 11 } },
            { s: { r: 7, c: 2 }, e: { r: 7, c: 5 } },
            { s: { r: 7, c: 7 }, e: { r: 7, c: 11 } }


        ];

        // Insert text logo into cell C4
        ws['C4'] = { v: 'Your Text Logo Here', s: boldStyle };
        ws['D4'] = { v: 'CREDENTIALLIFE SCIENCE PBT. LTD. ', s: alignStyle };
        ws['D5'] = { v: 'EQUIPMENT / AREA /INSTRUMENT LOG BOOK', s: boldStyle };
        ws['C7'] = { v: 'EQUIPMENT / AREA /INSTRUMENT NAME: ', s: boldStyle };
        ws['H7'] = { v: 'ID NUMBER : ', s: boldStyle };
        ws['C8'] = { t: 's', v: 'LOCATION : ', s: boldStyle };
        ws['H8'] = { t: 's', v: 'MONTH / YEAR (MM/YY): ', s: boldStyle };


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
