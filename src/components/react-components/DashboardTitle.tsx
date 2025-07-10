import Button from "../ui/Button";

const DashboardTitle = () => {
    return (
        <>
        <div className="flex items-center justify-center w-2/3 mx-auto">
            <div className="flex items-center justify-between w-full  bg-white pt-2 pb-2 px-4">
            <h1 className="text-2xl font-bold">Pumps</h1>
            <Button
            image=""
            buttonClass="bg-gray-100 hover:bg-gray-300 border border-gray-100 text-black font-sans text-sm w-24 h-8"
            text="New Pump" onClick={() => {}} />
        </div>
        </div>
        </>
    );
}
export default DashboardTitle;