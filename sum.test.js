const sum = require('./sandbox');

it('happy case' , () => {
    // sum(2).then(result => {
    //     expect(result).toBe(5);
    // })

    expect(sum(2)).toBe(5);
})

it('first/Second num is missing', ()=>{
    expect(sum(3)).toBeNaN();
})
