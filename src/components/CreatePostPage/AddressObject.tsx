import {useQuery} from "react-query";
import {Form, Select} from "antd";
import {Dispatch, SetStateAction, useState} from "react";
import {SearchAddressModel} from "../../interfaces/IAddress/SearchAddressModel.ts";
import {getAddressSearch} from "../../api/requests/Address/getAddressSearch.ts";

interface AddressObjectProps {
    parentObjectId?: number,
    addressElements: (number | undefined)[]
    setAddressElements: Dispatch<SetStateAction<(number | undefined)[]>>
    setSelectedElements: Dispatch<SetStateAction<string[]>>
}

export const AddressObject = ({parentObjectId=undefined, setAddressElements,
                                  addressElements, setSelectedElements}: AddressObjectProps) => {
    const [currentValue, setCurrentValue] = useState<string | undefined>(undefined);

    const fetchSearchAddress = () =>
        getAddressSearch({config: {params: {parentObjectId: parentObjectId, query: currentValue}}})
            .then((response) => response.data)

    const {data: elements, isLoading} = useQuery(['objects', parentObjectId, currentValue], fetchSearchAddress, {
        refetchOnWindowFocus: false,
    })
    const [label, setLabel] = useState("Следующий элемент адреса")

    const selectAddressElement = (addressElementGuid: string | undefined) => {
        if (addressElements.length > addressElements.indexOf(parentObjectId)) {
            setAddressElements(prevElements => [
                ...prevElements.slice(0, prevElements.indexOf(parentObjectId))
            ])
            setSelectedElements(prevElements => [
                ...prevElements.slice(0, addressElements.indexOf(parentObjectId))
            ])
            setAddressElements(prevElements => [
                ...prevElements,
                parentObjectId
            ])

        }

        if (addressElementGuid != 'default') {
            const addressElement = elements?.find((ad) => ad.objectGuid === addressElementGuid) as SearchAddressModel;
            if (addressElement.objectLevel != 'Building') {
                setAddressElements(prevElements => [
                    ...prevElements,
                    addressElement.objectId
                ])

            }

            setSelectedElements(prevElements => [
                ...prevElements,
                addressElement.objectGuid
            ])
            setLabel(addressElement.objectLevelText)
        }
        else {
            setLabel("Следующий элемент адреса")
            setSelectedElements(prevElements => [
                ...prevElements.slice(0, prevElements.length - 1),
            ])

        }
    };


    return (
        <Form.Item label={label}>
            <Select
                loading={isLoading}
                defaultValue='default'
                showSearch
                filterOption={false}
                onSearch={(namePart) => setCurrentValue(namePart)}
                onSelect={(value) => selectAddressElement(value)}
            >
                <Select.Option key='default' value={undefined}>Не выбран</Select.Option>
                {elements && elements.map(obj => (
                    <Select.Option key={obj.objectId} value={obj.objectGuid}>{obj.text}</Select.Option>
                ))}
            </Select>
        </Form.Item>
    )
}

