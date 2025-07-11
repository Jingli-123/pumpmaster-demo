import Button from '../ui/Button';
import SearchImg from '/src/assets/search.png';
import funnelImg from '/src/assets/funnel.png';
import editImg from '/src/assets/edit.png';
import deleteImg from '/src/assets/delete.png';
const DashboardToolbar = () => {
  return (
    <>
      <div className="flex items-center justify-center w-2/3 mx-auto">
        <div className="flex items-center justify-between w-full  bg-white pt-2 pb-2 px-4">
          <div className="flex items-center justify-center">
            <Button
              image={SearchImg}
              altText="Search"
              imageClass="w-5 h-5"
              buttonClass="flex items-center gap-2 px-2 py-2 bg-white rounded"
              text=""
              onClick={() => {}}
            />
            <Button
              image={funnelImg}
              altText="Search"
              imageClass="w-5 h-5"
              buttonClass="flex items-center gap-2 px-2 py-2 bg-white rounded"
              text=""
              onClick={() => {}}
            />
            <Button
              image={editImg}
              altText="Search"
              imageClass="w-5 h-5"
              buttonClass="flex items-center gap-2 px-2 py-2 bg-white rounded"
              text=""
              onClick={() => {}}
            />
          </div>
        </div>
        <Button
          image={deleteImg}
          altText="Search"
          imageClass="w-5 h-5"
          buttonClass="flex items-center gap-2 px-2 w-24 h-8 bg-blue-600 text-white rounded"
          text="Delete"
          onClick={() => {}}
        />
      </div>
    </>
  );
};
export default DashboardToolbar;
