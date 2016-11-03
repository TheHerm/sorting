/* eslint-env node, jasmine */
// global expect, Bubble Sort, matchFunctionMaker, $, Selector


describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('Sort the given array', function(){
    expect( bubbleSort([1,3,2,4]) ).toEqual( [1,2,3,4] );
  });
  it('Sort the given array', function(){
    expect( bubbleSort([5,1,3,2,4]) ).toEqual( [1,2,3,4,5] );
  });
  it('Sort the given array', function(){
    expect( bubbleSort([5,6,2,6,4,9,1,3,2,4])).toEqual( [1,2,2,3,4,4,5,6,6,9] );
  });
});
describe('Split', function(){
  it('handles an empty array', function(){
    expect( split([1,3,2,4]) ).toEqual( [[1,3], [2,4]] )
  });

  it('Sort the given array', function(){
    expect( split([5,1,3,2,4]) ).toEqual( [[5,1], [3,2,4]] );
  });

});
describe('Merge', function(){
  it('handles an empty array', function(){
    expect( merge([4,5,6], [3,2,1]) ).toEqual( [3,2,1,4,5,6,] );
  });

  it('Sort the given array', function(){
    expect( merge([1,5],[2,3,4] ) ).toEqual( [1,2,3,4,5] );
  });
});
describe('MergeSort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([4,5,6,3,2,1]) ).toEqual( [1,2,3,4,5,6] );
  });

  it('Sort the given array', function(){
    expect( mergeSort([1,5,2,3,4] ) ).toEqual( [1,2,3,4,5] );
  });
});
