describe('Object to query string', () => {
    it('should create a valid query string when an object is provided', () => {
        const obj = {
            name: 'Luiz',
            profession: 'developer'
        }

        expect(queryString(obj)).toBe(
            'name=Luiz&profession=developer'
        )
    })
})