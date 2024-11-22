import {Radio, useRadio, VisuallyHidden} from "@nextui-org/react";
import {cn} from "@/utils/cn";
import {GSSP_COMPONENT_MEMBER_ERROR} from "next/dist/lib/constants";

export const CustomRadio = (props) => {
    const {
        Component,
        children,
        isSelected,
        description,
        getBaseProps,
        getWrapperProps,
        getInputProps,
        getLabelProps,
        getLabelWrapperProps,
        getControlProps,
    } = useRadio(props);

    return (
        <Component
            {...getBaseProps()}
            className={
                cn(
                    "inline-flex m-0 bg-default-100 hover:bg-default-200 items-center active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent",
                    "flex-row-reverse  cursor-pointer rounded-xl gap-4 p-1 px-2 border-2 border-default",
                    "data-[selected=true]:border-primary"
                )
            }
        >
            <VisuallyHidden>
                <input {...getInputProps()} />
            </VisuallyHidden>
            <span {...getWrapperProps()}>
                <span {...getControlProps()} />
            </span>
            <div {...getLabelWrapperProps()}>
                {children && <span className='!text-default-500' >{children}</span>}
                {description && (
                    <span className="text-small text-default-500">{description}</span>
                )}
            </div>
        </Component>
    );
};
