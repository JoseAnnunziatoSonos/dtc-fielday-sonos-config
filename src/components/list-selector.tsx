import React from "react";

type ListSelectorProps = {
    title: string,
    listItems: [object],
    selectItem: any,
    selectedItem: any
};

const ListSelector = (
    {
        title,
        listItems,
        selectItem,
        selectedItem = {}
    }: ListSelectorProps) => {
    return(
        <>
            <h2>{title}</h2>
            <ul className="list-group shadow mb-5">
                {
                    listItems.map((item: any) => {
                        return(
                            <li className={`list-group-item ${item.label === selectedItem.label ? 'active' : ''}`}
                                onClick={() => selectItem(item)}>
                                {item.label}
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
};

export default ListSelector;
