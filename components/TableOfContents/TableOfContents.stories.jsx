import { TableOfContents } from "./TableOfContents";

export default {
    title: "Example/TableOfContents",
    component: TableOfContents,
};

const Template = (args) => <TableOfContents {...args} />;

export const Default = Template.bind({});
Default.args = {
    toc: [
        {
            id: "1",
            title: "Lorem ipsum dolor",
        },
        {
            id: "2",
            title: "Lorem ",
        },
        {
            id: "3",
            title: "Lorem ipsum t",
        },
        {
            id: "4",
            title: "Lorem ipsum d",
        },
        {
            id: "5",
            title: "Lorem ipsum",
        },
        {
            id: "6",
            title: "Lorem ip",
        },  
    ],  
};