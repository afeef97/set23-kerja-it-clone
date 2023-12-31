import React from "react";

const Button = ({ variation, customStyle, children, ...buttonHandlers }) => {
    let buttonStyle;
    switch (variation) {
        case "solid":
            buttonStyle =
                "bg-black text-base text-white leading-9 font-bold rounded-md w-[277px]" +
                " " +
                customStyle;
            break;
        case "outline":
            buttonStyle =
                "text-base text-black leading-9 font-bold border rounded-md w-[277px]" +
                " " +
                customStyle;
            break;
        case "ghost":
            buttonStyle =
                "text-base text-black leading-9 font-bold rounded w-[277px]" +
                " " +
                customStyle;
            break;
        default:
            buttonStyle =
                "text-base text-black leading-9 font-bold rounded w-[277px]" +
                " " +
                customStyle;
    }

    // TODO: Add button handlers
    return <button className={buttonStyle}>{children}</button>;
};

export default Button;
