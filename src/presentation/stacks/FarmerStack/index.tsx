import React, {memo} from "react";
import {Outlet} from "react-router-dom";


interface FarmerStackProps {}

const FarmerStack: React.FC<FarmerStackProps> = ({}) => {
    return (
        <div style={{ minHeight: "100vh" }} className="flex flex-row bg-gray-100">
            <Outlet />
        </div>
    );
};

export default memo(FarmerStack);
