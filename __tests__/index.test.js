import functions from '../index';

const inning = function() {
  return Math.floor(Math.random() * Math.floor(3));
}

const getInningScore = function(callback) {
  return { Home: callback(), Away: callback() };
}

describe('fooFunction', ()=>{
    it('foo returns foo', ()=>{
        expect(functions.foo()).toBe('bar');
    })
});

describe('inning', ()=>{
    it('inning returns a random number', ()=>{
        expect(functions.inning()).toBeLessThanOrEqual(2);
    })
});

describe('finalScore', ()=>{
    it('finalScore returns an object', ()=>{
        expect(functions.finalScore(inning, 9)).toEqual(expect.objectContaining({
            Home: expect.any(Number),
            Away: expect.any(Number),
          }))
    })
});

describe('getInningScore', ()=>{
    it('getInningScore returns an object', ()=>{
        expect(functions.getInningScore(inning)).toEqual(expect.objectContaining({
            Home: expect.any(Number),
            Away: expect.any(Number),
          }))
    })
});

describe('scoreboard', ()=>{
  it('scoreboard returns an array with properly structured string items', ()=>{
    let scoreString = new RegExp("Inning \\d: Away \\d - Home \\d");
    let finalScoreString = new RegExp("(Final Score: Away \\d{1,} - Home \\d{1,}|This game will require extra innings: Away \\d{1,} - Home \\d{1,})");
    expect(functions.scoreboard(9, inning, getInningScore)[0]).toMatch(scoreString);
    expect(functions.scoreboard(9, inning, getInningScore)[8]).toMatch(scoreString);
    expect(functions.scoreboard(9, inning, getInningScore)[9]).toMatch(finalScoreString);
  })
});

