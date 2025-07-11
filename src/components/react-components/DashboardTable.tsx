import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Pagination from "../ui/Pagination";
// import { getPumpDataApi } from "../../api/pumpData";
import {dummyPumpData} from "../../dummy-data/dummyData";
const DashboardTable = () => {
    const navigate = useNavigate();
    // assume get the data from backend by using follow code
    // const pumpData = getPumpDataApi();
    // import dummy data then create page numbers
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const paginatedData = dummyPumpData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    
    return(
        <>
        <div className="flex flex-col items-center justify-center w-2/3 mx-auto ">
        <table className="w-full">
            <thead className="border border-gray-100">
                <tr>
                    <th className="w-[80px] px-4 py-2 text-base text-left">Pump Name</th>
                    <th className="w-[120px] px-4 py-2 text-base text-left">Type</th>
                    <th className="w-[80px] px-4 py-2 text-base text-left">Area/Block</th>
                    <th className="w-[100px] px-4 py-2 text-base text-left">Latitude</th>
                    <th className="w-[100px] px-4 py-2 text-base text-left">Longitude</th>
                    <th className="w-[80px] px-4 py-2 text-base text-left">Flow Rate</th>
                    <th className="w-[80px] px-4 py-2 text-base text-left">Offset</th>
                    <th className="w-[80px] px-4 py-2 text-base text-left">Current Pressure</th>
                    <th className="w-[80px] px-4 py-2 text-base text-left">Min Pressure</th>
                    <th className="w-[80px] px-4 py-2 text-base text-left">Max Pressure</th>
                </tr>
            </thead>
            <tbody className="border border-gray-100">
                {paginatedData.map((pump, index) => (
                    <tr key={index} onClick={() => navigate(`/pump/${pump.pumpName}`)} className="cursor-pointer hover:bg-gray-100 border-b border-gray-100">
                        <td className="w-[80px] px-4 py-2 text-sm text-left">{pump.pumpName}</td>
                        <td className="w-[120px] px-4 py-2 text-sm text-left">{pump.type}</td>
                        <td className="w-[80px] px-4 py-2 text-sm text-left">{pump.areaBlock}</td>
                        <td className="w-[100px] px-4 py-2 text-sm text-left">{pump.latitude}</td>
                        <td className="w-[100px] px-4 py-2 text-sm text-left">{pump.longitude}</td>
                        <td className="w-[80px] px-4 py-2 text-sm text-left">{pump.flowRate}</td>
                        <td className="w-[80px] px-4 py-2 text-sm text-left">{pump.offset}</td>
                        <td className="w-[80px] px-4 py-2 text-sm text-left">{pump.currentPressure}</td>
                        <td className="w-[80px] px-4 py-2 text-sm text-left">{pump.minPressure}</td>
                        <td className="w-[80px] px-4 py-2 text-sm text-left">{pump.maxPressure}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Pagination totalItems={dummyPumpData.length} itemsPerPage={itemsPerPage} onPageChange={(page) => setCurrentPage(page)} />
        </div>
        </>
    )
}
export default DashboardTable;