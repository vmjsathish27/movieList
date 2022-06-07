import React from 'react';
import {render} from '@testing-library/react';
import Header from './Header';
import Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";
configure({adapter: new Adapter()});


describe("Header Testing", ()=> {
    test('render the title of the header', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find("h1").text()).toContain("Moive Catalogue");
     })
})


// it("checkButtonRender", ()=> {
//     const {queryByTitle} = render(<MovieList />)
//     const btn = queryByTitle("items")
//     expect(btn).toBeTruthy
// })


// describe("clickButton", ()=>{
//     it("onClick",()=>{
//         const {queryByTitle} = render(<MovieList />)
//         const btn = queryByTitle("items")
//         fireEvent.click
//         expect(btn.toggleAttribute(handleClick, toggleAttribute)).toBe(items)
//     })
// })

