/* eslint-disable */

describe('add() method', function() {
    it('should be a function', function() {
        expect(typeof add).toEqual('function')
    })

    it('should return a number', function() {
        const result = add(5, 1)
        expect(typeof result).toEqual('number')
    })

    it('should add up two numbers', function() {
        expect(add(2, 3)).toEqual(5)
    })

    it('should ignore additional arguments (more than two)', function() {
        expect(add(6, 6, 6)).toEqual(add(6, 6))
    })
})
