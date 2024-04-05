import React from 'react';
import ExcelJS from 'exceljs';
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
        columns,
        []
    ]; // First array contains the column headers
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
const ExcelExportJS = ({ tableData, keysForTable, category, location, instrument, runningId, month }) => {
    const createOuterBorder = (worksheet, start = { row: 2, col: 2 }, end = { row: 1, col: 13 }, borderWidth = 'medium') => {

        const borderStyle = {
            style: borderWidth
        };
        for (let i = start.row; i <= end.row; i++) {
            const leftBorderCell = worksheet.getCell(i, start.col);
            const rightBorderCell = worksheet.getCell(i, end.col);
            leftBorderCell.border = {
                ...leftBorderCell.border,
                left: borderStyle
            };
            rightBorderCell.border = {
                ...rightBorderCell.border,
                right: borderStyle
            };
        }

        for (let i = start.col; i <= end.col; i++) {
            const topBorderCell = worksheet.getCell(start.row, i);
            const bottomBorderCell = worksheet.getCell(end.row, i);
            topBorderCell.border = {
                ...topBorderCell.border,
                top: borderStyle
            };
            bottomBorderCell.border = {
                ...bottomBorderCell.border,
                bottom: borderStyle
            };
        }
    };
    const exportToExcel = async () => {
        const cloumnsforexcel = [null, null, "S.No.", "Date", "Shift", "Name of the Product", "Batch Number", "Start Time", "End Time", "Done By", "Check By", "Remarks"];
        const keysofarray = ["usage_data", "shift", "product", "batch", "op_st_time", "op_ed_time", "operation_done_by", "operation_check_by", "operation_remark"];
        const data = [
            {
                "usage_data": "2024-03-22",
                "shift": "10;00-12:00",
                "product": "abc",
                "batch": "1201",
                "op_st_time": "2024-03-22 08:00:00",
                "op_ed_time": "2024-03-22 10:00:00",
                "operation_done_by": "Aman  Gupta",
                "operation_check_by": "Utkasrh Dixit",
                "operation_remark": "k"
            },
            {
                "usage_data": "2024-03-22",
                "shift": "10;00-12:00",
                "product": "abc",
                "batch": "1201",
                "op_st_time": "2024-03-22 08:00:00",
                "op_ed_time": "2024-03-22 10:00:00",
                "operation_done_by": "Aman  Gupta",
                "operation_check_by": "Utkasrh Dixit",
                "operation_remark": "k"
            },
            {
                "usage_data": "2024-03-22",
                "shift": "10;00-12:00",
                "product": "abc",
                "batch": "1201",
                "op_st_time": "2024-03-22 08:00:00",
                "op_ed_time": "2024-03-22 10:00:00",
                "operation_done_by": "Aman  Gupta",
                "operation_check_by": "Utkasrh Dixit",
                "operation_remark": "k"
            },
            {
                "usage_data": "2024-03-22",
                "shift": "10;00-12:00",
                "product": "abc",
                "batch": "1201",
                "op_st_time": "2024-03-22 08:00:00",
                "op_ed_time": "2024-03-22 10:00:00",
                "operation_done_by": "Aman  Gupta",
                "operation_check_by": "Utkasrh Dixit",
                "operation_remark": "k"
            }
        ];
        console.log("sended data", tableData);
        console.log("excel keys", keysForTable);
        const arrays = objectsToArrays(tableData, keysForTable, cloumnsforexcel);

        const formatRow = arrays.length + 2;

        // Create a new workbook
        const workbook = new ExcelJS.Workbook();

        // Add a worksheet    
        const worksheet = workbook.addWorksheet('Sheet1');

        // Define data for the worksheet
        // Add extra rows and columns around data for border gap

        // Add data to the worksheet
        worksheet.addRows(arrays);

        worksheet.mergeCells('C4:C5'); //
        worksheet.mergeCells('D4:L4'); // 
        worksheet.mergeCells('D5:L5'); // 
        worksheet.mergeCells('C7:G7'); // 
        worksheet.mergeCells('C8:G8'); // 
        worksheet.mergeCells('I7:L7'); // 
        worksheet.mergeCells('I8:L8'); // 
        worksheet.mergeCells('C10:C11'); // 
        worksheet.mergeCells('D10:D11'); // 
        worksheet.mergeCells('E10:E11'); // 
        worksheet.mergeCells('F10:F11'); // 
        worksheet.mergeCells('G10:G11'); // 
        worksheet.mergeCells('H10:I10'); // 
        // worksheet.mergeCells('H11:I11'); // 
        worksheet.mergeCells('J10:J11'); // 
        worksheet.mergeCells('K10:K11'); // 
        worksheet.mergeCells('L10:L11'); // 


        worksheet.getRow(4).getCell(4).value = "CREDENTIALLIFE SCIENCE PBT. LTD.";
        worksheet.getRow(5).getCell(4).value = "EQUIPMENT / AREA /INSTRUMENT LOG BOOK";
        worksheet.getRow(7).getCell(3).value = "EQUIPMENT / AREA /INSTRUMENT NAME:";
        worksheet.getRow(7).getCell(9).value = "ID NUMBER :";
        worksheet.getRow(8).getCell(3).value = "LOCATION :";
        worksheet.getRow(8).getCell(9).value = "MONTH / YEAR (MM/YY) :";
        if (category == 'op') {
            worksheet.getRow(10).getCell(8).value = "Operation";

        }
        if (category == 'm') {
            worksheet.getRow(10).getCell(8).value = "Maintenance";

        }
        if (category == 'cl') {
            worksheet.getRow(10).getCell(8).value = "Cleaning";

        }
        if (category == 'break') {
            worksheet.getRow(10).getCell(8).value = "Breakdown";
        }

        worksheet.getRow(11).getCell(8).value = "Start Time";
        worksheet.getRow(11).getCell(9).value = "End Time";
        worksheet.getRow(formatRow).getCell(3).value = "QA/35-F01-00";


        // Apply styles to cells
        worksheet.getCell('C10').font = { bold: true }; // Apply bold font to cell A1
        worksheet.getCell('D10').font = { bold: true }; // Apply bold font to cell A1
        worksheet.getCell('E10').font = { bold: true }; // Apply bold font to cell A1
        worksheet.getCell('F10').font = { bold: true }; // Apply bold font to cell A1
        worksheet.getCell('G10').font = { bold: true }; // Apply bold font to cell A1
        worksheet.getCell('H10').font = { bold: true }; // Apply bold font to cell A1
        worksheet.getCell('I10').font = { bold: true }; // Apply bold font to cell A1
        worksheet.getCell('J10').font = { bold: true }; // Apply bold font to cell A1
        worksheet.getCell('K10').font = { bold: true }; // Apply bold font to cell A1
        worksheet.getCell('L10').font = { bold: true }; // Apply bold font to cell A1
        worksheet.getCell('H11').font = { bold: true }; // Apply bold font to cell A1
        worksheet.getCell('I11').font = { bold: true }; // Apply bold font to cell A1
        worksheet.getCell('D4').font = { bold: true }; // Apply bold font to cell A1
        worksheet.getCell('D5').font = { bold: true }; // Apply bold font to cell A1
        worksheet.getCell(`C${formatRow}`).font = { color: { argb: '808080' } }; // Apply bold font to cell A1
        worksheet.getCell(`D4`).font = { color: { argb: '0000FF' } }; // Apply bold font to cell A1


        // Add border to cells
        const borderStyle = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' }
        };


        worksheet.eachRow((row) => {
            row.eachCell((cell) => {
                cell.border = borderStyle;
                cell.alignment = { horizontal: 'center' };
            });
        });

        createOuterBorder(worksheet, { row: 2, col: 2 }, { row: formatRow + 1, col: 13 });


        worksheet.getCell('C7').alignment = { horizontal: 'left' }; // Apply bold font to cell A1
        worksheet.getCell('I7').alignment = { horizontal: 'left' }; // Apply bold font to cell A1
        worksheet.getCell('C8').alignment = { horizontal: 'left' }; // Apply bold font to cell A1
        worksheet.getCell('I8').alignment = { horizontal: 'left' }; // Apply bold font to cell A1


        // Load the image file
        //BELOW CODE CAN BE USE INSTEAD OF FETCH API 
        // const loadImage = (file) => {
        //     return new Promise((resolve, reject) => {
        //         const reader = new FileReader();
        //         reader.onload = () => resolve(reader.result);
        //         reader.onerror = reject;
        //         reader.readAsArrayBuffer(file);
        //     });
        // };
        // Insert image into a cell
        // const imgPath = '../../../assets/creedential_logo.png'; // Path to your image file

        const response = await fetch(imgData);
        const bufferImage = await response.arrayBuffer();
        const imgId = workbook.addImage({
            buffer: bufferImage,
            extension: 'png',
        });
        // insert an image over B2:D6
        worksheet.addImage(imgId, {
            tl: { col: 2, row: 3 }, // top-left corner of the image anchored to cell B3
            ext: { width: 80, height: 45 }, // size of the image
        });
        // worksheet.addImage(imgId, {
        //     tl: { col: 3, row: 4 }, // Cell to anchor the top-left corner of the image
        //     ext: { width: 100, height: 100 } // Size of the image (adjust as needed)
        // });

        // Save workbook to a file
        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: "application/octet-stream" });
        saveAs(blob, "example.xlsx");
    };

    return (
        <Button onClick={exportToExcel} className="mb-3" size={"md"} > Export Excel </Button>

        // <button onClick={exportToExcel}>Export to Excel</button>
    );
};

export default ExcelExportJS;
