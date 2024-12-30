import {Dispatch, SetStateAction} from "react";
import { Typography} from "antd";
import {AddressObject} from "./AddressObject.tsx";

interface AddressSelectProps {
    addressElements: (number | undefined)[]
    setAddressElements: Dispatch<SetStateAction<(number | undefined)[]>>
    setSelectedElements: Dispatch<SetStateAction<string[]>>
}

export const AddressSelect = ({addressElements, setAddressElements, setSelectedElements} : AddressSelectProps) => {

    return (
        <>
            <Typography.Title level={4}>Адрес</Typography.Title>
            {addressElements.map((addressElement) => (
                <AddressObject key={addressElement} parentObjectId={addressElement}
                               setAddressElements={setAddressElements} addressElements={addressElements}
                                setSelectedElements={setSelectedElements}/>
            ))}
        </>
    )
}

