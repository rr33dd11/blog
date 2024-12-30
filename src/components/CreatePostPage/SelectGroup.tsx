import {Form, Select} from "antd";
import {useQuery} from "react-query";
import {getMyCommunities} from "../../api/requests/Community/getMyCommunities.ts";
import {getCommunityInfo} from "../../api/requests/Community/getCommunityInfo.ts";
import {CommunityRole} from "../../enums/CommunityRole.ts";

export const SelectGroup = () => {

    const fetchGroups = () =>
        getMyCommunities().then((response) => response.data);

    const { isLoading: groupsLoading, data: groups } = useQuery(
        ["groups"], fetchGroups, {refetchOnWindowFocus: false, keepPreviousData: true}
    );

    const fetchGroupDetails = async () => {
        if (!groups) return [];
        const administratorGroups = groups.filter(
            (g) => g.role === CommunityRole.Administrator
        );

        return await Promise.all(
            administratorGroups.map((group) =>
                getCommunityInfo({params: {communityId: group.communityId}}).then(
                    (res) => ({
                        id: group.communityId,
                        name: res.data.name,
                    })
                )
            )
        );
    };

    const {data: groupOptions, isLoading: optionsLoading} = useQuery(["groupOptions"], fetchGroupDetails, {
        enabled: !!groups,
        refetchOnWindowFocus: false
    });

    const isLoading = groupsLoading || optionsLoading;

    return (
        <Form.Item label='Группа' name='group'>
            <Select loading={isLoading}>
                <Select.Option value="undefined">
                    Без группы
                </Select.Option>
                {groupOptions?.map((group) => (
                    <Select.Option key={group.id} value={group.id}>
                        {group.name}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>

    );
};
