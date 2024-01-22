import React from "react";

const Right = () =>{
    return(
        <div
         className="w-full h-full flex flex-col items-center justify-end gap-16 text-textLight"
        >
            <a href="mailto:as2sekho@uwaterloo.ca">
                <p
                 className="text-sm rotate-90 w-72 tracking-wide text-textLight"
                >
                    as2sekho@uwaterloo.ca
                </p>
            </a>
            <span className="w-[2px] h-32 bg-textLighter inline-flex"></span>
        </div>
    )
}

export default Right