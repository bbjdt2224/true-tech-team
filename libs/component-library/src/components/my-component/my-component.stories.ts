import './my-component'

export default {
    title: 'Components/MyComponent'
}

const Template = (args) => `<my-component first="${args.first}" middle="${args.middle}" last="${args.last}"></my-component>`;

export const Example = Template.bind({});
Example.args = {
    first: 'Justin',
    middle: 'D',
    last: 'True'
}