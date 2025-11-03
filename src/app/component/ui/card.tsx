import React from "react";
import { cn } from "@/app/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
    return (
        <div
            className={cn(
                "bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition duration-200",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
