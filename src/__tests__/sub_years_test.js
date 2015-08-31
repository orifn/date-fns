var subYears = require('../sub_years')

describe('subYears', function() {
  it('subtracts number of passed years', function() {
    var result = subYears(new Date(2014, 8 /* Sep */, 1), 5)
    expect(result).to.be.eql(new Date(2009, 8 /* Sep */, 1))
  })

  it('accepts string', function() {
    var result = subYears(new Date(2014, 8 /* Sep */, 1).toISOString(), 12)
    expect(result).to.be.eql(new Date(2002, 8 /* Sep */, 1))
  })

  it('accepts timestamp', function() {
    var result = subYears(new Date(2014, 8 /* Sep */, 1).getTime(), 12)
    expect(result).to.be.eql(new Date(2002, 8 /* Sep */, 1))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    subYears(date, 12)
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1))
  })
})
